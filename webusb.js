var webusb = {};

(function() {
  'use strict';

  webusb.port = undefined;
  let textEncoder = new TextEncoder();
  let textDecoder = new TextDecoder();

  webusb.connect = async function() {

    // if port connected, we need to disconnect and connect again
    if (webusb.port) {
      await webusb.port.disconnect().catch(error => {
        console.log(error);
      });
      console.log('disconnect');
    } else { // let user select board
      await webusb.requestPort().then(selectedPort => {
        webusb.port = selectedPort;
      }).catch(error => {
        console.log('No port selected');
        console.log(error);
        throw error;
      });
    }

    webusb.port.connect().then(()=> {
      return Promise.resolve();
    }, error => {
      throw error;
    });
  };

  webusb.connectDefault = async function() {

    // if port connected, we need to disconnect and connect again
    if (webusb.port) {
      await webusb.port.disconnect().catch(error => {
        console.log(error);
      });
      console.log('disconnect');
    } else { // get default port
      await webusb.getPorts().then(ports => {
        if (ports.length == 0) {
          console.log('No device found.');
          throw new Error('No device found.');
        } else {
          console.log('Connecting...');
          webusb.port = ports[0];
          webusb.port.connect().then(()=> {
            return Promise.resolve();
          }, error => {
            throw error;
          });
        }}
      ).catch(error => {
        console.log('No port selected');
        console.log(error);
        throw error;
      });
    }
  };

  webusb.disconnect = async function() {
    if (webusb.port) {
      await webusb.port.disconnect().catch(error => {
        console.log(error);
      });
      webusb.port = undefined;
      console.log('disconnect');
    } else {
      console.log('No port connected. No need to do anything');
    }
  };

  webusb.sendFile = async function(fileContent, fileName='main.py', append=false) {
    if (this.port == undefined) {
      throw new Error("Board not connected");
    }

    // send Ctrl+C twice to interrupt any running program
    let commands = new Uint8Array(1);
    commands[0] = 0x03;
    await this.port.send(commands);
    await this.port.send(commands);

    // send Ctrl+A to enter raw REPL mode
    commands[0] = 0x01;
    await this.port.send(commands);

    // send all code
    let writeMode = '';
    if (append) {
      writeMode = 'a';
    } else {
      writeMode = 'w';
    }
    let commandOpenFile = "f = open('" + fileName + "','" + writeMode + "')\r\n";
    await this.port.send(textEncoder.encode(commandOpenFile)); //textEncoder.encode("f = open('" + fileName + "', " + append?"'a'":"'w'" + ")\r\n"));
    //console.log(commandOpenFile);
    //console.log("f = open('main.py', 'w')\n")
    var codeLines = fileContent.split('\n');
    for(var i=0; i<codeLines.length; i++) {
      if (codeLines[i].endsWith('\r') || codeLines[i].endsWith('\n')) {
        codeLines[i] = codeLines[i].slice(0, -1);
      }

      if (codeLines[i].endsWith('\r') || codeLines[i].endsWith('\n')) {
        codeLines[i] = codeLines[i].slice(0, -1);
      }

      // escape special characters like " or \n or \r
      var escapedCode = codeLines[i].replace(/[\\]/g, '\\\\').replace(/["]/g, '\\"');

      var command = 'f.write("' + escapedCode + '\\n")\r\n';
      //console.log(command);
      await this.port.send(textEncoder.encode(command));
    }
    await this.port.send(textEncoder.encode("f.close()\r\n"));

    // send Ctrl+D to save the sent code
    commands[0] = 0x04;
    await this.port.send(commands);

    // send Ctrl+B to exit raw REPL mode
    commands[0] = 0x02;
    await this.port.send(commands);

    // send Ctrl+D to soft reset
    commands[0] = 0x04;
    await this.port.send(commands);
    return;
  };

  webusb.getPorts = function() {
    return navigator.usb.getDevices().then(devices => {
      return devices.map(device => new webusb.Port(device));
    });
  };

  webusb.requestPort = function() {
    const filters = [
      { 'vendorId': 0x2341, 'productId': 0x8037 },
      { 'vendorId': 0x10c4, 'productId': 0xea60 }
    ];
    return navigator.usb.requestDevice({ 'filters': filters }).then(
      device => new webusb.Port(device)
    );
  }

  webusb.processReceivedData = function(data) {
    if (webusb.onReceive) {
      webusb.onReceive(textDecoder.decode(data));
    }
    //console.log(textDecoder.decode(data));
  }

  webusb.processReceivedDataError = function(error) {
    if (webusb.onReceive) {
      webusb.onReceiveError(error);
    }
    //console.log('Error receiving data: ', error);
  }

  webusb.Port = function(device) {
    this.device_ = device;
    this.interfaceNumber_ = 2;  // original interface number of WebUSB Arduino demo
    this.endpointIn_ = 5;       // original in endpoint ID of WebUSB Arduino demo
    this.endpointOut_ = 4;      // original out endpoint ID of WebUSB Arduino demo
  };

  webusb.Port.prototype.connect = function() {
    let readLoop = () => {
      this.device_.transferIn(this.endpointIn_, 64).then(result => {
        webusb.processReceivedData(result.data);
        readLoop();
      }, error => {
        webusb.processReceivedDataError(error);
      });
    };

    return this.device_.open()
        .then(() => {
          if (this.device_.configuration === null) {
            return this.device_.selectConfiguration(1);
          }
        })
        .then(() => {
          var configurationInterfaces = this.device_.configuration.interfaces;
          configurationInterfaces.forEach(element => {
            element.alternates.forEach(elementalt => {
              if (elementalt.interfaceClass==0xff) {
                this.interfaceNumber_ = element.interfaceNumber;
                elementalt.endpoints.forEach(elementendpoint => {
                  if (elementendpoint.direction == "out") {
                    this.endpointOut_ = elementendpoint.endpointNumber;
                  }
                  if (elementendpoint.direction=="in") {
                    this.endpointIn_ =elementendpoint.endpointNumber;
                  }
                })
              }
            })
          })
        })
        .then(() => this.device_.claimInterface(this.interfaceNumber_))
        .then(() => this.device_.selectAlternateInterface(this.interfaceNumber_, 0))
        .then(() => this.device_.controlTransferOut({
            'requestType': 'class',
            'recipient': 'interface',
            'request': 0x22,
            'value': 0x01,
            'index': this.interfaceNumber_}))
        .then(() => {
          readLoop();
        });
  };

  webusb.Port.prototype.disconnect = function() {
    return this.device_.controlTransferOut({
            'requestType': 'class',
            'recipient': 'interface',
            'request': 0x22,
            'value': 0x00,
            'index': this.interfaceNumber_})
        .then(() => this.device_.close());
  };

  webusb.Port.prototype.send = function(data) {
    return this.device_.transferOut(this.endpointOut_, data);
  };
})();
