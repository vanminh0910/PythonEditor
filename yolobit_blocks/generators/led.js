'use strict';

goog.provide('Blockly.Python.display');
goog.require('Blockly.Python');

// Any imports need to be reserved words
Blockly.Python.addReservedWords('display');

Blockly.Python['yolobit_led_set_xy'] = function(block) {
  var value_x = Blockly.Python.valueToCode(block, 'X', Blockly.Python.ORDER_ATOMIC);
  var value_y = Blockly.Python.valueToCode(block, 'Y', Blockly.Python.ORDER_ATOMIC);
  var value_color = Blockly.Python.valueToCode(block, 'COLOR', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  Blockly.Python.definitions_['import_yolobit'] = 'from yolobit import *';
  var code = 'display.set_pixel(' + value_x + ', ' + value_y + ', ' + value_color + ')\n';
  return code;
};

Blockly.Python['yolobit_led_clear_xy'] = function(block) {
  var value_x = Blockly.Python.valueToCode(block, 'X', Blockly.Python.ORDER_ATOMIC);
  var value_y = Blockly.Python.valueToCode(block, 'Y', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  Blockly.Python.definitions_['import_yolobit'] = 'from yolobit import *';
  var code = 'display.clear_pixel(' + value_x + ', ' + value_y + ')\n';
  return code;
};

Blockly.Python['yolobit_led_set_all'] = function(block) {
  var value_color = Blockly.Python.valueToCode(block, 'COLOR', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  Blockly.Python.definitions_['import_yolobit'] = 'from yolobit import *';
  var code = 'display.set_all(' + value_color + ')\n';
  return code;
};

Blockly.Python['yolobit_led_show_graph'] = function(block) {
  var value_value = Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_ATOMIC);
  var value_max = Blockly.Python.valueToCode(block, 'MAX', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  Blockly.Python.definitions_['import_yolobit'] = 'from yolobit import *';
  var code = 'display.show_graph(' + value_value + ', ' + value_max + ')\n';
  return code;
};

Blockly.Python['yolobit_led_set_brightness'] = function(block) {
  var value_brightness = Blockly.Python.valueToCode(block, 'BRIGHTNESS', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  Blockly.Python.definitions_['import_yolobit'] = 'from yolobit import *';
  var code = 'display.set_brightness(' + value_brightness + ')\n';
  return code;
};
