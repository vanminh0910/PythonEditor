'use strict';

goog.provide('Blockly.Python.input');
goog.require('Blockly.Python');

// Any imports need to be reserved words
Blockly.Python.addReservedWords('yolobit');

Blockly.Python['yolobit_input_button_is_pressed'] = function(block) {
  Blockly.Python.definitions_['import_yolobit'] = 'from yolobit import *';
  var dropdown_button = block.getFieldValue('button');
  var code = 'button_' + dropdown_button + '.is_pressed()';
  return [code, Blockly.Python.ORDER_MEMBER];
};

Blockly.Python['yolobit_input_button_get_presses'] = function(block) {
  Blockly.Python.definitions_['import_yolobit'] = 'from yolobit import *';
  var dropdown_button = block.getFieldValue('button');
  var code = 'button_' + dropdown_button + '.get_presses()';
  return [code, Blockly.Python.ORDER_MEMBER];
};

Blockly.Python['yolobit_input_pin_touched'] = function(block) {
  Blockly.Python.definitions_['import_yolobit'] = 'from yolobit import *';
  var dropdown_pin = block.getFieldValue('pin');
  var code = 'pin' + dropdown_pin + '.is_touched()';
  return [code, Blockly.Python.ORDER_MEMBER];
};

Blockly.Python['yolobit_input_accelerometer_get_value'] = function(block) {
  Blockly.Python.definitions_['import_yolobit'] = 'from yolobit import *';
  var dropdown_axis = block.getFieldValue('axis');
  var code = 'accelerometer.get()["' + dropdown_axis + '"]';
  return [code, Blockly.Python.ORDER_MEMBER];
};

Blockly.Python['yolobit_input_gesture_detected'] = function(block) {
  Blockly.Python.definitions_['import_yolobit'] = 'from yolobit import *';
  var dropdown_gesture = block.getFieldValue('gesture');
  var code = 'accelerometer.is_gesture("' + dropdown_gesture + '")';
  return [code, Blockly.Python.ORDER_MEMBER];
};


Blockly.Python['yolobit_input_running_time'] = function(block) {
  Blockly.Python.definitions_['import_yolobit'] = 'from yolobit import *';
  var code = 'yolobit.running_time()';
  return [code, Blockly.Python.ORDER_MEMBER];
};

Blockly.Python['yolobit_input_get_temperature'] = function(block) {
  Blockly.Python.definitions_['import_yolobit'] = 'from yolobit import *';
  var code = 'yolobit.temperature()';
  return [code, Blockly.Python.ORDER_MEMBER];
};

Blockly.Python['yolobit_input_get_light_level'] = function(block) {
  Blockly.Python.definitions_['import_yolobit'] = 'from yolobit import *';
  var code = 'yolobit.light_level()';
  return [code, Blockly.Python.ORDER_MEMBER];
};
