[{
  "type": "yolobit_input_button_is_pressed",
  "message0": "button %1 is pressed",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "button",
      "options": [
        [
          "A",
          "a"
        ],
        [
          "B",
          "b"
        ]
      ]
    }
  ],
  "output": "Boolean",
  "colour": 10,
  "tooltip": "Check if button is pressed or not",
  "helpUrl": ""
},
{
  "type": "yolobit_input_button_get_presses",
  "message0": "get number of presses for button %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "button",
      "options": [
        [
          "A",
          "a"
        ],
        [
          "B",
          "b"
        ]
      ]
    }
  ],
  "output": "Number",
  "colour": 10,
  "tooltip": "Return the running total of presses for the specified button, and resets this total to zero.",
  "helpUrl": ""
},
{
  "type": "yolobit_input_pin_touched",
  "message0": "pin %1 is touched",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "pin",
      "options": [
        [
          "P0",
          "0"
        ],
        [
          "P1",
          "1"
        ],
        [
          "P2",
          "2"
        ]
      ]
    }
  ],
  "output": "Boolean",
  "colour": 120,
  "tooltip": "Check if the specified pin is touched or not.",
  "helpUrl": ""
},

{
  "type": "yolobit_input_accelerometer_get_value",
  "message0": "get accelerometer %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "axis",
      "options": [
        [
          "x",
          "x"
        ],
        [
          "y",
          "y"
        ],
        [
          "z",
          "z"
        ]
      ]
    }
  ],
  "output": null,
  "colour": 20,
  "tooltip": "Get acceleration value in mili-gravity (mg).",
  "helpUrl": ""
},
{
  "type": "yolobit_input_gesture_detected",
  "message0": "gesture is %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "gesture",
      "options": [
        [
          "shake",
          "shake"
        ],
        [
          "up",
          "up"
        ],
        [
          "down",
          "down"
        ],
        [
          "left",
          "left"
        ],
        [
          "right",
          "right"
        ],
        [
          "face up",
          "face up"
        ],
        [
          "face down",
          "face down"
        ],
        [
          "freefall",
          "freefall"
        ],
        [
          "3g",
          "3g"
        ],
        [
          "6g",
          "6g"
        ],
        [
          "8g",
          "8g"
        ]
      ]
    }
  ],
  "output": "Boolean",
  "colour": 20,
  "tooltip": "Return True or False to indicate if the named gesture is currently active.",
  "helpUrl": ""
},
{
  "type": "yolobit_input_running_time",
  "message0": "running time (ms)",
  "output": "Number",
  "colour": 210,
  "tooltip": "Get the number of milliseconds since power on.",
  "helpUrl": ""
},
{
  "type": "yolobit_input_get_temperature",
  "message0": "temperature",
  "output": "Number",
  "colour": 210,
  "tooltip": "Get the temperature in degrees Celcius.",
  "helpUrl": ""
},
{
  "type": "yolobit_input_get_light_level",
  "message0": "light level",
  "output": "Number",
  "colour": 210,
  "tooltip": "Get the light level (0: dark, 4095: bright).",
  "helpUrl": ""
}
]
