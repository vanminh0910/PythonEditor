'use strict';

goog.provide('Blockly.Blocks.colour');
goog.require('Blockly.Blocks');
goog.require('Blockly.constants');

Blockly.FieldColour.COLOURS = ['#000', '#400', '#600', '#800', '#a00', '#b00',
                               '#c00', '#d00', '#e00', '#f00'];
Blockly.FieldColour.COLUMNS = 5;


Blockly.Blocks['yolobit_basic_scroll_number'] = {
  init: function() {
    this.jsonInit({"colour": "#1e90ff", "nextStatement": null, "tooltip": Blockly.Msg.YOLOBIT_BASIC_SCROLL_NUMBER_TOOLTIP, "message0": Blockly.Msg.YOLOBIT_BASIC_SCROLL_NUMBER_MESSAGE0, "previousStatement": null, "args0": [{"type": "input_value", "name": "message", "check": "Number"}], "helpUrl": Blockly.Msg.YOLOBIT_BASIC_SCROLL_NUMBER_HELPURL});
  }
};


Blockly.Blocks['yolobit_basic_scroll_text'] = {
  init: function() {
    this.jsonInit({"colour": "#1e90ff", "nextStatement": null, "tooltip": Blockly.Msg.YOLOBIT_BASIC_SCROLL_TEXT_TOOLTIP, "message0": Blockly.Msg.YOLOBIT_BASIC_SCROLL_TEXT_MESSAGE0, "previousStatement": null, "args0": [{"type": "input_value", "name": "message", "check": "String"}], "helpUrl": Blockly.Msg.YOLOBIT_BASIC_SCROLL_TEXT_HELPURL});
  }
};


Blockly.Blocks['yolobit_basic_show_image'] = {
  init: function() {
    this.jsonInit({"colour": "#1e90ff", "nextStatement": null, "tooltip": Blockly.Msg.YOLOBIT_BASIC_SHOW_IMAGE_TOOLTIP, "message0": Blockly.Msg.YOLOBIT_BASIC_SHOW_IMAGE_MESSAGE0, "previousStatement": null, "args0": [{"type": "input_value", "name": "image", "check": "yolobit_image"}], "helpUrl": Blockly.Msg.YOLOBIT_BASIC_SHOW_IMAGE_HELPURL});
  }
};


Blockly.Blocks['yolobit_basic_image_builtins'] = {
  init: function() {
    this.jsonInit({"colour": "#1e90ff", "tooltip": Blockly.Msg.YOLOBIT_BASIC_IMAGE_BUILTINS_TOOLTIP, "message0": Blockly.Msg.YOLOBIT_BASIC_IMAGE_BUILTINS_MESSAGE0, "args0": [{"type": "field_dropdown", "name": "image", "options": [["HEART", "HEART"], ["HEART_SMALL", "HEART_SMALL"], ["HAPPY", "HAPPY"], ["SMILE", "SMILE"], ["SAD", "SAD"], ["CONFUSED", "CONFUSED"], ["ANGRY", "ANGRY"], ["ASLEEP", "ASLEEP"], ["SURPRISED", "SURPRISED"], ["SILLY", "SILLY"], ["FABULOUS", "FABULOUS"], ["MEH", "MEH"], ["YES", "YES"], ["NO", "NO"], ["CLOCK12", "CLOCK12"], ["CLOCK11", "CLOCK11"], ["CLOCK10", "CLOCK10"], ["CLOCK9", "CLOCK9"], ["CLOCK8", "CLOCK8"], ["CLOCK7", "CLOCK7"], ["CLOCK6", "CLOCK6"], ["CLOCK5", "CLOCK5"], ["CLOCK4", "CLOCK4"], ["CLOCK3", "CLOCK3"], ["CLOCK2", "CLOCK2"], ["CLOCK1", "CLOCK1"], ["ARROW_N", "ARROW_N"], ["ARROW_NE", "ARROW_NE"], ["ARROW_E", "ARROW_E"], ["ARROW_SE", "ARROW_SE"], ["ARROW_S", "ARROW_S"], ["ARROW_SW", "ARROW_SW"], ["ARROW_W", "ARROW_W"], ["ARROW_NW", "ARROW_NW"], ["TRIANGLE", "TRIANGLE"], ["TRIANGLE_LEFT", "TRIANGLE_LEFT"], ["CHESSBOARD", "CHESSBOARD"], ["DIAMOND", "DIAMOND"], ["DIAMOND_SMALL", "DIAMOND_SMALL"], ["SQUARE", "SQUARE"], ["SQUARE_SMALL", "SQUARE_SMALL"], ["RABBIT", "RABBIT"], ["COW", "COW"], ["MUSIC_CROTCHET", "MUSIC_CROTCHET"], ["MUSIC_QUAVER", "MUSIC_QUAVER"], ["MUSIC_QUAVERS", "MUSIC_QUAVERS"], ["PITCHFORK", "PITCHFORK"], ["XMAS", "XMAS"], ["PACMAN", "PACMAN"], ["TARGET", "TARGET"], ["TSHIRT", "TSHIRT"], ["ROLLERSKATE", "ROLLERSKATE"], ["DUCK", "DUCK"], ["HOUSE", "HOUSE"], ["TORTOISE", "TORTOISE"], ["BUTTERFLY", "BUTTERFLY"], ["STICKFIGURE", "STICKFIGURE"], ["GHOST", "GHOST"], ["SWORD", "SWORD"], ["GIRAFFE", "GIRAFFE"], ["SKULL", "SKULL"], ["UMBRELLA", "UMBRELLA"], ["SNAKE", "SNAKE"], ["ALL_CLOCKS", "ALL_CLOCKS"], ["ALL_ARROWS", "ALL_ARROWS"]]}], "output": ["yolobit_image", "Array"], "helpUrl": Blockly.Msg.YOLOBIT_BASIC_IMAGE_BUILTINS_HELPURL});
  }
};


Blockly.Blocks['yolobit_basic_create_image'] = {
  init: function() {
    this.jsonInit({"colour": "#1e90ff", "tooltip": Blockly.Msg.YOLOBIT_BASIC_CREATE_IMAGE_TOOLTIP, "message0": Blockly.Msg.YOLOBIT_BASIC_CREATE_IMAGE_MESSAGE0, "args0": [{"type": "input_dummy"}, {"colour": "#000000", "type": "field_colour", "name": "00"}, {"colour": "#000000", "type": "field_colour", "name": "01"}, {"colour": "#000000", "type": "field_colour", "name": "02"}, {"colour": "#000000", "type": "field_colour", "name": "03"}, {"colour": "#000000", "type": "field_colour", "name": "04"}, {"type": "input_dummy"}, {"colour": "#000000", "type": "field_colour", "name": "10"}, {"colour": "#000000", "type": "field_colour", "name": "11"}, {"colour": "#000000", "type": "field_colour", "name": "12"}, {"colour": "#000000", "type": "field_colour", "name": "13"}, {"colour": "#000000", "type": "field_colour", "name": "14"}, {"type": "input_dummy"}, {"colour": "#000000", "type": "field_colour", "name": "20"}, {"colour": "#000000", "type": "field_colour", "name": "21"}, {"colour": "#000000", "type": "field_colour", "name": "22"}, {"colour": "#000000", "type": "field_colour", "name": "23"}, {"colour": "#000000", "type": "field_colour", "name": "24"}, {"type": "input_dummy"}, {"colour": "#000000", "type": "field_colour", "name": "30"}, {"colour": "#000000", "type": "field_colour", "name": "31"}, {"colour": "#000000", "type": "field_colour", "name": "32"}, {"colour": "#000000", "type": "field_colour", "name": "33"}, {"colour": "#000000", "type": "field_colour", "name": "34"}, {"type": "input_dummy"}, {"colour": "#000000", "type": "field_colour", "name": "40"}, {"colour": "#000000", "type": "field_colour", "name": "41"}, {"colour": "#000000", "type": "field_colour", "name": "42"}, {"colour": "#000000", "type": "field_colour", "name": "43"}, {"colour": "#000000", "type": "field_colour", "name": "44"}], "output": "yolobit_image", "helpUrl": Blockly.Msg.YOLOBIT_BASIC_CREATE_IMAGE_HELPURL});
  }
};


Blockly.Blocks['yolobit_basic_sleep'] = {
  init: function() {
    this.jsonInit({"inputsInline": true, "colour": "#1e90ff", "nextStatement": null, "tooltip": Blockly.Msg.YOLOBIT_BASIC_SLEEP_TOOLTIP, "message0": Blockly.Msg.YOLOBIT_BASIC_SLEEP_MESSAGE0, "previousStatement": null, "args0": [{"type": "input_value", "name": "duration", "check": "Number"}], "helpUrl": Blockly.Msg.YOLOBIT_BASIC_SLEEP_HELPURL});
  }
};


Blockly.Blocks['yolobit_basic_clear_display'] = {
  init: function() {
    this.jsonInit({"colour": "#1e90ff", "nextStatement": null, "tooltip": Blockly.Msg.YOLOBIT_BASIC_CLEAR_DISPLAY_TOOLTIP, "message0": Blockly.Msg.YOLOBIT_BASIC_CLEAR_DISPLAY_MESSAGE0, "previousStatement": null, "helpUrl": Blockly.Msg.YOLOBIT_BASIC_CLEAR_DISPLAY_HELPURL});
  }
};


Blockly.Blocks['yolobit_basic_forever'] = {
  init: function() {
    this.jsonInit({"colour": "#1e90ff", "tooltip": Blockly.Msg.YOLOBIT_BASIC_FOREVER_TOOLTIP, "message0": Blockly.Msg.YOLOBIT_BASIC_FOREVER_MESSAGE0, "args0": [{"type": "input_dummy"}, {"type": "input_statement", "name": "ONSTART"}, {"type": "input_dummy"}, {"type": "input_statement", "name": "FOREVER"}], "helpUrl": Blockly.Msg.YOLOBIT_BASIC_FOREVER_HELPURL});
  }
};


Blockly.Blocks['yolobit_input_button_is_pressed'] = {
  init: function() {
    this.jsonInit({"colour": "#d400d4", "tooltip": Blockly.Msg.YOLOBIT_INPUT_BUTTON_IS_PRESSED_TOOLTIP, "message0": Blockly.Msg.YOLOBIT_INPUT_BUTTON_IS_PRESSED_MESSAGE0, "args0": [{"type": "field_dropdown", "name": "button", "options": [["A", "a"], ["B", "b"]]}], "output": "Boolean", "helpUrl": Blockly.Msg.YOLOBIT_INPUT_BUTTON_IS_PRESSED_HELPURL});
  }
};


Blockly.Blocks['yolobit_input_button_get_presses'] = {
  init: function() {
    this.jsonInit({"colour": "#d400d4", "tooltip": Blockly.Msg.YOLOBIT_INPUT_BUTTON_GET_PRESSES_TOOLTIP, "message0": Blockly.Msg.YOLOBIT_INPUT_BUTTON_GET_PRESSES_MESSAGE0, "args0": [{"type": "field_dropdown", "name": "button", "options": [["A", "a"], ["B", "b"]]}], "output": "Number", "helpUrl": Blockly.Msg.YOLOBIT_INPUT_BUTTON_GET_PRESSES_HELPURL});
  }
};


Blockly.Blocks['yolobit_input_pin_touched'] = {
  init: function() {
    this.jsonInit({"colour": "#d400d4", "tooltip": Blockly.Msg.YOLOBIT_INPUT_PIN_TOUCHED_TOOLTIP, "message0": Blockly.Msg.YOLOBIT_INPUT_PIN_TOUCHED_MESSAGE0, "args0": [{"type": "field_dropdown", "name": "pin", "options": [["P0", "0"], ["P1", "1"], ["P2", "2"]]}], "output": "Boolean", "helpUrl": Blockly.Msg.YOLOBIT_INPUT_PIN_TOUCHED_HELPURL});
  }
};


Blockly.Blocks['yolobit_input_accelerometer_get_value'] = {
  init: function() {
    this.jsonInit({"colour": "#d400d4", "tooltip": Blockly.Msg.YOLOBIT_INPUT_ACCELEROMETER_GET_VALUE_TOOLTIP, "message0": Blockly.Msg.YOLOBIT_INPUT_ACCELEROMETER_GET_VALUE_MESSAGE0, "args0": [{"type": "field_dropdown", "name": "axis", "options": [["x", "x"], ["y", "y"], ["z", "z"]]}], "output": null, "helpUrl": Blockly.Msg.YOLOBIT_INPUT_ACCELEROMETER_GET_VALUE_HELPURL});
  }
};


Blockly.Blocks['yolobit_input_gesture_detected'] = {
  init: function() {
    this.jsonInit({"colour": "#d400d4", "tooltip": Blockly.Msg.YOLOBIT_INPUT_GESTURE_DETECTED_TOOLTIP, "message0": Blockly.Msg.YOLOBIT_INPUT_GESTURE_DETECTED_MESSAGE0, "args0": [{"type": "field_dropdown", "name": "gesture", "options": [["shake", "shake"], ["up", "up"], ["down", "down"], ["left", "left"], ["right", "right"], ["face up", "face up"], ["face down", "face down"], ["freefall", "freefall"], ["3g", "3g"], ["6g", "6g"], ["8g", "8g"]]}], "output": "Boolean", "helpUrl": Blockly.Msg.YOLOBIT_INPUT_GESTURE_DETECTED_HELPURL});
  }
};


Blockly.Blocks['yolobit_input_running_time'] = {
  init: function() {
    this.jsonInit({"colour": "#d400d4", "tooltip": Blockly.Msg.YOLOBIT_INPUT_RUNNING_TIME_TOOLTIP, "message0": Blockly.Msg.YOLOBIT_INPUT_RUNNING_TIME_MESSAGE0, "output": "Number", "helpUrl": Blockly.Msg.YOLOBIT_INPUT_RUNNING_TIME_HELPURL});
  }
};


Blockly.Blocks['yolobit_input_get_temperature'] = {
  init: function() {
    this.jsonInit({"colour": "#d400d4", "tooltip": Blockly.Msg.YOLOBIT_INPUT_GET_TEMPERATURE_TOOLTIP, "message0": Blockly.Msg.YOLOBIT_INPUT_GET_TEMPERATURE_MESSAGE0, "output": "Number", "helpUrl": Blockly.Msg.YOLOBIT_INPUT_GET_TEMPERATURE_HELPURL});
  }
};


Blockly.Blocks['yolobit_input_get_light_level'] = {
  init: function() {
    this.jsonInit({"colour": "#d400d4", "tooltip": Blockly.Msg.YOLOBIT_INPUT_GET_LIGHT_LEVEL_TOOLTIP, "message0": Blockly.Msg.YOLOBIT_INPUT_GET_LIGHT_LEVEL_MESSAGE0, "output": "Number", "helpUrl": Blockly.Msg.YOLOBIT_INPUT_GET_LIGHT_LEVEL_HELPURL});
  }
};


Blockly.Blocks['yolobit_music_play_built_in'] = {
  init: function() {
    this.jsonInit({"colour": "#e63022", "nextStatement": null, "tooltip": Blockly.Msg.YOLOBIT_MUSIC_PLAY_BUILT_IN_TOOLTIP, "message0": Blockly.Msg.YOLOBIT_MUSIC_PLAY_BUILT_IN_MESSAGE0, "previousStatement": null, "args0": [{"type": "field_dropdown", "name": "melody", "options": [["DADADADUM", "DADADADUM"], ["ENTERTAINER", "ENTERTAINER"], ["PRELUDE", "PRELUDE"], ["ODE", "ODE"], ["NYAN", "NYAN"], ["RINGTONE", "RINGTONE"], ["FUNK", "FUNK"], ["BLUES", "BLUES"], ["BIRTHDAY", "BIRTHDAY"], ["WEDDING", "WEDDING"], ["FUNERAL", "FUNERAL"], ["PUNCHLINE", "PUNCHLINE"], ["PYTHON", "PYTHON"], ["BADDY", "BADDY"], ["CHASE", "CHASE"], ["BA_DING", "BA_DING"], ["WAWAWAWAA", "WAWAWAWAA"], ["JUMP_UP", "JUMP_UP"], ["JUMP_DOWN", "JUMP_DOWN"], ["POWER_UP", "POWER_UP"], ["POWER_DOWN", "POWER_DOWN"]]}, {"type": "input_dummy"}, {"type": "field_checkbox", "checked": true, "name": "wait"}, {"type": "input_dummy"}, {"type": "field_checkbox", "checked": false, "name": "loop"}], "helpUrl": Blockly.Msg.YOLOBIT_MUSIC_PLAY_BUILT_IN_HELPURL});
  }
};


Blockly.Blocks['yolobit_music_pitch'] = {
  init: function() {
    this.jsonInit({"inputsInline": true, "colour": "#e63022", "nextStatement": null, "tooltip": Blockly.Msg.YOLOBIT_MUSIC_PITCH_TOOLTIP, "message0": Blockly.Msg.YOLOBIT_MUSIC_PITCH_MESSAGE0, "previousStatement": null, "args0": [{"type": "field_number", "name": "pitch", "value": 440, "min": 0}, {"type": "input_dummy"}, {"type": "field_number", "name": "duration", "value": 1000, "min": 0}], "helpUrl": Blockly.Msg.YOLOBIT_MUSIC_PITCH_HELPURL});
  }
};


Blockly.Blocks['yolobit_music_play_list_of_notes'] = {
  init: function() {
    this.jsonInit({"colour": "#e63022", "nextStatement": null, "tooltip": Blockly.Msg.YOLOBIT_MUSIC_PLAY_LIST_OF_NOTES_TOOLTIP, "message0": Blockly.Msg.YOLOBIT_MUSIC_PLAY_LIST_OF_NOTES_MESSAGE0, "previousStatement": null, "args0": [{"type": "input_value", "name": "notes", "check": "Array"}, {"type": "field_checkbox", "checked": true, "name": "wait"}, {"type": "input_dummy"}, {"type": "field_checkbox", "checked": false, "name": "loop"}], "helpUrl": Blockly.Msg.YOLOBIT_MUSIC_PLAY_LIST_OF_NOTES_HELPURL});
  }
};


Blockly.Blocks['yolobit_music_reset'] = {
  init: function() {
    this.jsonInit({"colour": "#e63022", "nextStatement": null, "tooltip": Blockly.Msg.YOLOBIT_MUSIC_RESET_TOOLTIP, "message0": Blockly.Msg.YOLOBIT_MUSIC_RESET_MESSAGE0, "previousStatement": null, "helpUrl": Blockly.Msg.YOLOBIT_MUSIC_RESET_HELPURL});
  }
};


Blockly.Blocks['yolobit_music_stop'] = {
  init: function() {
    this.jsonInit({"colour": "#e63022", "nextStatement": null, "tooltip": Blockly.Msg.YOLOBIT_MUSIC_STOP_TOOLTIP, "message0": Blockly.Msg.YOLOBIT_MUSIC_STOP_MESSAGE0, "previousStatement": null, "helpUrl": Blockly.Msg.YOLOBIT_MUSIC_STOP_HELPURL});
  }
};


Blockly.Blocks['yolobit_music_set_tempo'] = {
  init: function() {
    this.jsonInit({"inputsInline": true, "colour": "#e63022", "nextStatement": null, "tooltip": Blockly.Msg.YOLOBIT_MUSIC_SET_TEMPO_TOOLTIP, "message0": Blockly.Msg.YOLOBIT_MUSIC_SET_TEMPO_MESSAGE0, "previousStatement": null, "args0": [{"type": "input_value", "name": "ticks", "check": "Number"}, {"type": "input_value", "name": "bpm", "check": "Number"}], "helpUrl": Blockly.Msg.YOLOBIT_MUSIC_SET_TEMPO_HELPURL});
  }
};


Blockly.Blocks['yolobit_music_get_tempo'] = {
  init: function() {
    this.jsonInit({"colour": "#e63022", "tooltip": Blockly.Msg.YOLOBIT_MUSIC_GET_TEMPO_TOOLTIP, "message0": Blockly.Msg.YOLOBIT_MUSIC_GET_TEMPO_MESSAGE0, "output": "Array", "helpUrl": Blockly.Msg.YOLOBIT_MUSIC_GET_TEMPO_HELPURL});
  }
};


Blockly.Blocks['yolobit_led_set_xy'] = {
  init: function() {
    this.jsonInit({"inputsInline": true, "colour": "#5d2c91", "nextStatement": null, "tooltip": Blockly.Msg.YOLOBIT_LED_SET_XY_TOOLTIP, "message0": Blockly.Msg.YOLOBIT_LED_SET_XY_MESSAGE0, "previousStatement": null, "args0": [{"type": "input_value", "name": "X", "check": "Number"}, {"type": "input_value", "name": "Y", "check": "Number"}, {"type": "input_value", "name": "COLOR"}], "helpUrl": Blockly.Msg.YOLOBIT_LED_SET_XY_HELPURL});
  }
};


Blockly.Blocks['yolobit_led_clear_xy'] = {
  init: function() {
    this.jsonInit({"inputsInline": true, "colour": "#5d2c91", "nextStatement": null, "tooltip": Blockly.Msg.YOLOBIT_LED_CLEAR_XY_TOOLTIP, "message0": Blockly.Msg.YOLOBIT_LED_CLEAR_XY_MESSAGE0, "previousStatement": null, "args0": [{"type": "input_value", "name": "X", "check": "Number"}, {"type": "input_value", "name": "Y", "check": "Number"}], "helpUrl": Blockly.Msg.YOLOBIT_LED_CLEAR_XY_HELPURL});
  }
};


Blockly.Blocks['yolobit_led_set_all'] = {
  init: function() {
    this.jsonInit({"inputsInline": true, "colour": "#5d2c91", "nextStatement": null, "tooltip": Blockly.Msg.YOLOBIT_LED_SET_ALL_TOOLTIP, "message0": Blockly.Msg.YOLOBIT_LED_SET_ALL_MESSAGE0, "previousStatement": null, "args0": [{"type": "input_value", "name": "COLOR"}], "helpUrl": Blockly.Msg.YOLOBIT_LED_SET_ALL_HELPURL});
  }
};


Blockly.Blocks['yolobit_led_show_graph'] = {
  init: function() {
    this.jsonInit({"inputsInline": true, "colour": "#5d2c91", "nextStatement": null, "tooltip": Blockly.Msg.YOLOBIT_LED_SHOW_GRAPH_TOOLTIP, "message0": Blockly.Msg.YOLOBIT_LED_SHOW_GRAPH_MESSAGE0, "previousStatement": null, "args0": [{"type": "input_value", "name": "VALUE", "check": "Number"}, {"type": "input_value", "name": "MAX", "check": "Number"}], "helpUrl": Blockly.Msg.YOLOBIT_LED_SHOW_GRAPH_HELPURL});
  }
};


Blockly.Blocks['yolobit_led_set_brightness'] = {
  init: function() {
    this.jsonInit({"colour": "#5d2c91", "nextStatement": null, "tooltip": Blockly.Msg.YOLOBIT_LED_SET_BRIGHTNESS_TOOLTIP, "message0": Blockly.Msg.YOLOBIT_LED_SET_BRIGHTNESS_MESSAGE0, "previousStatement": null, "args0": [{"type": "input_value", "name": "BRIGHTNESS", "check": "Number"}], "helpUrl": Blockly.Msg.YOLOBIT_LED_SET_BRIGHTNESS_HELPURL});
  }
};


Blockly.Blocks['yolobit_pin_touched'] = {
  init: function() {
    this.jsonInit({"colour": "#b22222", "tooltip": Blockly.Msg.YOLOBIT_PIN_TOUCHED_TOOLTIP, "message0": Blockly.Msg.YOLOBIT_PIN_TOUCHED_MESSAGE0, "args0": [{"type": "field_dropdown", "name": "pin", "options": [["P0", "0"], ["P1", "1"], ["P2", "2"]]}], "output": "Boolean", "helpUrl": Blockly.Msg.YOLOBIT_PIN_TOUCHED_HELPURL});
  }
};


Blockly.Blocks['yolobit_pin_read_analog'] = {
  init: function() {
    this.jsonInit({"colour": "#b22222", "tooltip": Blockly.Msg.YOLOBIT_PIN_READ_ANALOG_TOOLTIP, "message0": Blockly.Msg.YOLOBIT_PIN_READ_ANALOG_MESSAGE0, "args0": [{"type": "field_dropdown", "name": "pin", "options": [["P0", "0"], ["P1", "1"], ["P2", "2"], ["P3", "3"], ["P4", "4"], ["P5", "5"], ["P6", "6"], ["P7", "7"], ["P10", "10"], ["P11", "11"], ["P12", "12"]]}], "output": "Number", "helpUrl": Blockly.Msg.YOLOBIT_PIN_READ_ANALOG_HELPURL});
  }
};


Blockly.Blocks['yolobit_pin_write_analog'] = {
  init: function() {
    this.jsonInit({"colour": "#b22222", "nextStatement": null, "tooltip": Blockly.Msg.YOLOBIT_PIN_WRITE_ANALOG_TOOLTIP, "message0": Blockly.Msg.YOLOBIT_PIN_WRITE_ANALOG_MESSAGE0, "previousStatement": null, "args0": [{"type": "input_value", "name": "output", "check": "Number"}, {"type": "field_dropdown", "name": "pin", "options": [["P0", "0"], ["P1", "1"], ["P2", "2"], ["P3", "3"], ["P6", "6"], ["P7", "7"], ["P8", "8"], ["P9", "9"], ["P10", "10"], ["P11", "11"], ["P12", "12"], ["P13", "13"], ["P14", "14"], ["P15", "15"], ["P16", "16"], ["P19", "19"], ["P20", "20"]]}], "helpUrl": Blockly.Msg.YOLOBIT_PIN_WRITE_ANALOG_HELPURL});
  }
};


Blockly.Blocks['yolobit_pin_read_digital'] = {
  init: function() {
    this.jsonInit({"colour": "#b22222", "tooltip": Blockly.Msg.YOLOBIT_PIN_READ_DIGITAL_TOOLTIP, "message0": Blockly.Msg.YOLOBIT_PIN_READ_DIGITAL_MESSAGE0, "args0": [{"type": "field_dropdown", "name": "pin", "options": [["P0", "0"], ["P1", "1"], ["P2", "2"], ["P3", "3"], ["P6", "6"], ["P7", "7"], ["P8", "8"], ["P9", "9"], ["P10", "10"], ["P11", "11"], ["P12", "12"], ["P13", "13"], ["P14", "14"], ["P15", "15"], ["P16", "16"], ["P19", "19"], ["P20", "20"]]}], "output": "Boolean", "helpUrl": Blockly.Msg.YOLOBIT_PIN_READ_DIGITAL_HELPURL});
  }
};


Blockly.Blocks['yolobit_pin_write_digital'] = {
  init: function() {
    this.jsonInit({"colour": "#b22222", "nextStatement": null, "tooltip": Blockly.Msg.YOLOBIT_PIN_WRITE_DIGITAL_TOOLTIP, "message0": Blockly.Msg.YOLOBIT_PIN_WRITE_DIGITAL_MESSAGE0, "previousStatement": null, "args0": [{"type": "input_value", "name": "output", "check": "Number"}, {"type": "field_dropdown", "name": "pin", "options": [["P0", "0"], ["P1", "1"], ["P2", "2"], ["P3", "3"], ["P6", "6"], ["P7", "7"], ["P8", "8"], ["P9", "9"], ["P10", "10"], ["P11", "11"], ["P12", "12"], ["P13", "13"], ["P14", "14"], ["P15", "15"], ["P16", "16"], ["P19", "19"], ["P20", "20"]]}], "helpUrl": Blockly.Msg.YOLOBIT_PIN_WRITE_DIGITAL_HELPURL});
  }
};


Blockly.Blocks['yolobit_pin_onoff_value'] = {
  init: function() {
    this.jsonInit({"colour": "#b22222", "tooltip": Blockly.Msg.YOLOBIT_PIN_ONOFF_VALUE_TOOLTIP, "message0": Blockly.Msg.YOLOBIT_PIN_ONOFF_VALUE_MESSAGE0, "args0": [{"type": "field_dropdown", "name": "value", "options": [["ON", "1"], ["OFF", "0"]]}], "output": "Number", "helpUrl": Blockly.Msg.YOLOBIT_PIN_ONOFF_VALUE_HELPURL});
  }
};


