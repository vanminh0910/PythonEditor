'use strict';

goog.provide('Blockly.Python.basic');
goog.require('Blockly.Python');

// Any imports need to be reserved words
Blockly.Python.addReservedWords('yolobit');

Blockly.Python['yolobit_basic_scroll_number'] = function(block) {
  Blockly.Python.definitions_['import_yolobit'] = 'from yolobit import *';
  var value_message = Blockly.Python.valueToCode(block, 'message', Blockly.Python.ORDER_ATOMIC);
  var code = 'display.scroll(' + value_message + ')\n';
  return code;
};

Blockly.Python['yolobit_basic_scroll_text'] = function(block) {
  Blockly.Python.definitions_['import_yolobit'] = 'from yolobit import *';
  var value_message = Blockly.Python.valueToCode(block, 'message', Blockly.Python.ORDER_ATOMIC);
  var code = 'display.scroll(' + value_message + ')\n';
  return code;
};

Blockly.Python['yolobit_basic_show_image'] = function(block) {
  Blockly.Python.definitions_['import_yolobit'] = 'from yolobit import *';
  var value_image = Blockly.Python.valueToCode(block, 'image', Blockly.Python.ORDER_MEMBER);
  var code = 'display.show(' + value_image + ')\n';
  return code;
};

Blockly.Python['yolobit_basic_image_builtins'] = function(block) {
  Blockly.Python.definitions_['import_yolobit'] = 'from yolobit import *';
  var dropdown_image = block.getFieldValue('image');
  var code = 'Image.' + dropdown_image;
  return [code, Blockly.Python.ORDER_MEMBER];
};

Blockly.Python['yolobit_basic_create_image'] = function(block) {
  Blockly.Python.definitions_['import_yolobit'] = 'from yolobit import *';
  var colours = {
    "#000000": "0",
    "#440000": "1",
    "#660000": "2",
    "#880000": "3",
    "#aa0000": "4",
    "#bb0000": "5",
    "#cc0000": "6",
    "#dd0000": "7",
    "#ee0000": "8",
    "#ff0000": "9"
  }
  var colour_00 = colours[block.getFieldValue('00')];
  var colour_01 = colours[block.getFieldValue('01')];
  var colour_02 = colours[block.getFieldValue('02')];
  var colour_03 = colours[block.getFieldValue('03')];
  var colour_04 = colours[block.getFieldValue('04')];
  var colour_10 = colours[block.getFieldValue('10')];
  var colour_11 = colours[block.getFieldValue('11')];
  var colour_12 = colours[block.getFieldValue('12')];
  var colour_13 = colours[block.getFieldValue('13')];
  var colour_14 = colours[block.getFieldValue('14')];
  var colour_20 = colours[block.getFieldValue('20')];
  var colour_21 = colours[block.getFieldValue('21')];
  var colour_22 = colours[block.getFieldValue('22')];
  var colour_23 = colours[block.getFieldValue('23')];
  var colour_24 = colours[block.getFieldValue('24')];
  var colour_30 = colours[block.getFieldValue('30')];
  var colour_31 = colours[block.getFieldValue('31')];
  var colour_32 = colours[block.getFieldValue('32')];
  var colour_33 = colours[block.getFieldValue('33')];
  var colour_34 = colours[block.getFieldValue('34')];
  var colour_40 = colours[block.getFieldValue('40')];
  var colour_41 = colours[block.getFieldValue('41')];
  var colour_42 = colours[block.getFieldValue('42')];
  var colour_43 = colours[block.getFieldValue('43')];
  var colour_44 = colours[block.getFieldValue('44')];
  var code = 'Image("' + colour_00 + colour_01 + colour_02 + colour_03 + colour_04 + ':' + colour_10 + colour_11 + colour_12 + colour_13 + colour_14 + ':' + colour_20 + colour_21 + colour_22 + colour_23 + colour_24 + ':' + colour_30 + colour_31 + colour_32 + colour_33 + colour_34 + ':' + colour_40 + colour_41 + colour_42 + colour_43 + colour_44 + '")';
  return [code, Blockly.Python.ORDER_MEMBER];
};

Blockly.Python['yolobit_basic_sleep'] = function(block) {
  Blockly.Python.definitions_['import_time'] = 'import time';
  var value_duration = Blockly.Python.valueToCode(block, 'duration', Blockly.Python.ORDER_ATOMIC);
  var code = 'time.sleep_ms(' + value_duration + ')\n';
  return code;
};

Blockly.Python['yolobit_basic_clear_display'] = function(block) {
  Blockly.Python.definitions_['import_yolobit'] = 'from yolobit import *';
  var code = 'display.clear()\n';
  return code;
};

Blockly.Python['yolobit_basic_forever'] = function(block) {
  var statements_onstart = Blockly.Python.statementToCode(block, 'ONSTART', Blockly.Python.ORDER_NONE);
  var statements_forever = Blockly.Python.statementToCode(block, 'FOREVER');
  // TODO: Assemble Python into code variable.
  var code = '';
  if (statements_onstart != '') 
    code = 'if True:\n' + statements_onstart + '\n' 
  else
    code = '';
  
  Blockly.Python.definitions_['on_start'] = code;
  
  if (statements_forever != '') 
    code = 'while True:\n' + statements_forever;
  else
    code = 'while True:\n' + Blockly.Python.INDENT + Blockly.Python.PASS;
  
  Blockly.Python.definitions_['forever'] = code;
  return null;
};

