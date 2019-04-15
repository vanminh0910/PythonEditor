[
  {
    "type": "yolobit_led_set_xy",
    "message0": "set led color at x %1 y %2 to %3",
    "args0": [
      {
        "type": "input_value",
        "name": "X",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "Y",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "COLOR"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 260,
    "tooltip": "Set color of specific led based on x and y position.",
    "helpUrl": ""
  },
  {
    "type": "yolobit_led_clear_xy",
    "message0": "Turn off led at x %1 y %2",
    "args0": [
      {
        "type": "input_value",
        "name": "X",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "Y",
        "check": "Number"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 260,
    "tooltip": "Turn off specific led based on x and y position.",
    "helpUrl": ""
  },
  {
    "type": "yolobit_led_set_all",
    "message0": "set all leds to  %1",
    "args0": [
      {
        "type": "input_value",
        "name": "COLOR"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 260,
    "tooltip": "Set color of all leds.",
    "helpUrl": ""
  },
  {
    "type": "yolobit_led_show_graph",
    "message0": "show bar graph of %1 up to %2",
    "args0": [
      {
        "type": "input_value",
        "name": "VALUE",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "MAX",
        "check": "Number"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 260,
    "tooltip": "Display a vertical graph based on the 'value' and 'high value'",
    "helpUrl": ""
  },
  {
    "type": "yolobit_led_set_brightness",
    "message0": "set led brightness %1",
    "args0": [
      {
        "type": "input_value",
        "name": "BRIGHTNESS",
        "check": "Number"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 260,
    "tooltip": "Set led brightness from 0 (off) to 255 (full bright)",
    "helpUrl": ""
  }
]
