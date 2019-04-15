[{
  "type": "yolobit_pin_touched",
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
  "type": "yolobit_pin_read_analog",
  "message0": "analog read pin %1",
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
        ],
        [
          "P3",
          "3"
        ],
        [
          "P4",
          "4"
        ],
        [
          "P5",
          "5"
        ],
        [
          "P6",
          "6"
        ],
        [
          "P7",
          "7"
        ],
        [
          "P10",
          "10"
        ],
        [
          "P11",
          "11"
        ],
        [
          "P12",
          "12"
        ]
      ]
    }
  ],
  "output": "Number",
  "colour": 120,
  "tooltip": "Read analog value from the referenced pin.",
  "helpUrl": ""
},
{
  "type": "yolobit_pin_write_analog",
  "message0": "analog write pin %2 to %1",
  "args0": [
    {
      "type": "input_value",
      "name": "output",
      "check": "Number"
    },
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
        ],
        [
          "P3",
          "3"
        ],
        [
          "P6",
          "6"
        ],
        [
          "P7",
          "7"
        ],
        [
          "P8",
          "8"
        ],
        [
          "P9",
          "9"
        ],
        [
          "P10",
          "10"
        ],
        [
          "P11",
          "11"
        ],
        [
          "P12",
          "12"
        ],
        [
          "P13",
          "13"
        ],
        [
          "P14",
          "14"
        ],
        [
          "P15",
          "15"
        ],
        [
          "P16",
          "16"
        ],
        [
          "P19",
          "19"
        ],
        [
          "P20",
          "20"
        ]
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 120,
  "tooltip": "Write analog value to the referenced pin.",
  "helpUrl": ""
},
{
  "type": "yolobit_pin_read_digital",
  "message0": "digital read pin %1",
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
        ],
        [
          "P3",
          "3"
        ],
        [
          "P6",
          "6"
        ],
        [
          "P7",
          "7"
        ],
        [
          "P8",
          "8"
        ],
        [
          "P9",
          "9"
        ],
        [
          "P10",
          "10"
        ],
        [
          "P11",
          "11"
        ],
        [
          "P12",
          "12"
        ],
        [
          "P13",
          "13"
        ],
        [
          "P14",
          "14"
        ],
        [
          "P15",
          "15"
        ],
        [
          "P16",
          "16"
        ],
        [
          "P19",
          "19"
        ],
        [
          "P20",
          "20"
        ]
      ]
    }
  ],
  "output": "Boolean",
  "colour": 120,
  "tooltip": "Read digital value (True or False) from the specified pin.",
  "helpUrl": ""
},
{
  "type": "yolobit_pin_write_digital",
  "message0": "digital write pin %2 to value %1",
  "args0": [
    {
      "type": "input_value",
      "name": "output",
      "check": "Number"
    },
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
        ],
        [
          "P3",
          "3"
        ],
        [
          "P6",
          "6"
        ],
        [
          "P7",
          "7"
        ],
        [
          "P8",
          "8"
        ],
        [
          "P9",
          "9"
        ],
        [
          "P10",
          "10"
        ],
        [
          "P11",
          "11"
        ],
        [
          "P12",
          "12"
        ],
        [
          "P13",
          "13"
        ],
        [
          "P14",
          "14"
        ],
        [
          "P15",
          "15"
        ],
        [
          "P16",
          "16"
        ],
        [
          "P19",
          "19"
        ],
        [
          "P20",
          "20"
        ]
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 120,
  "tooltip": "Write digital value (On or Off) to the specified pin.",
  "helpUrl": ""
},
{
  "type": "yolobit_pin_onoff_value",
  "message0": "%1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "value",
      "options": [
        [
          "ON",
          "1"
        ],
        [
          "OFF",
          "0"
        ]
      ]
    }
  ],
  "output": "Number",
  "colour": 230,
  "tooltip": "Quick way to select on or off pin state",
  "helpUrl": ""
}]
