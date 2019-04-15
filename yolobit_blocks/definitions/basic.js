[{
  "type": "yolobit_basic_scroll_number",
  "message0": "show number %1",
  "args0": [
    {
      "type": "input_value",
      "name": "message",
      "check": "Number"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "tooltip": "Scroll the number on led screen. If the number fits on the screen (ie. is a single digit), do not scroll.",
  "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/display.html#microbit.display.scroll"
},
{
  "type": "yolobit_basic_scroll_text",
  "message0": "show text %1",
  "args0": [
    {
      "type": "input_value",
      "name": "message",
      "check": "String"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "tooltip": "Display text on led screen, one character at a time. If text fits on the screen (ie. is a single character), do not scroll.",
  "helpUrl": ""
},
{
  "type": "yolobit_basic_show_image",
  "message0": "show image %1",
  "args0": [
    {
      "type": "input_value",
      "name": "image",
      "check": "yolobit_image"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 0,
  "tooltip": "Display the selected image on the led screen.",
  "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/display.html#microbit.display.show"
},
{
  "type": "yolobit_basic_image_builtins",
  "message0": "%1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "image",
      "options": [
        [
          "HEART",
          "HEART"
        ],
        [
          "HEART_SMALL",
          "HEART_SMALL"
        ],
        [
          "HAPPY",
          "HAPPY"
        ],
        [
          "SMILE",
          "SMILE"
        ],
        [
          "SAD",
          "SAD"
        ],
        [
          "CONFUSED",
          "CONFUSED"
        ],
        [
          "ANGRY",
          "ANGRY"
        ],
        [
          "ASLEEP",
          "ASLEEP"
        ],
        [
          "SURPRISED",
          "SURPRISED"
        ],
        [
          "SILLY",
          "SILLY"
        ],
        [
          "FABULOUS",
          "FABULOUS"
        ],
        [
          "MEH",
          "MEH"
        ],
        [
          "YES",
          "YES"
        ],
        [
          "NO",
          "NO"
        ],
        [
          "CLOCK12",
          "CLOCK12"
        ],
        [
          "CLOCK11",
          "CLOCK11"
        ],
        [
          "CLOCK10",
          "CLOCK10"
        ],
        [
          "CLOCK9",
          "CLOCK9"
        ],
        [
          "CLOCK8",
          "CLOCK8"
        ],
        [
          "CLOCK7",
          "CLOCK7"
        ],
        [
          "CLOCK6",
          "CLOCK6"
        ],
        [
          "CLOCK5",
          "CLOCK5"
        ],
        [
          "CLOCK4",
          "CLOCK4"
        ],
        [
          "CLOCK3",
          "CLOCK3"
        ],
        [
          "CLOCK2",
          "CLOCK2"
        ],
        [
          "CLOCK1",
          "CLOCK1"
        ],
        [
          "ARROW_N",
          "ARROW_N"
        ],
        [
          "ARROW_NE",
          "ARROW_NE"
        ],
        [
          "ARROW_E",
          "ARROW_E"
        ],
        [
          "ARROW_SE",
          "ARROW_SE"
        ],
        [
          "ARROW_S",
          "ARROW_S"
        ],
        [
          "ARROW_SW",
          "ARROW_SW"
        ],
        [
          "ARROW_W",
          "ARROW_W"
        ],
        [
          "ARROW_NW",
          "ARROW_NW"
        ],
        [
          "TRIANGLE",
          "TRIANGLE"
        ],
        [
          "TRIANGLE_LEFT",
          "TRIANGLE_LEFT"
        ],
        [
          "CHESSBOARD",
          "CHESSBOARD"
        ],
        [
          "DIAMOND",
          "DIAMOND"
        ],
        [
          "DIAMOND_SMALL",
          "DIAMOND_SMALL"
        ],
        [
          "SQUARE",
          "SQUARE"
        ],
        [
          "SQUARE_SMALL",
          "SQUARE_SMALL"
        ],
        [
          "RABBIT",
          "RABBIT"
        ],
        [
          "COW",
          "COW"
        ],
        [
          "MUSIC_CROTCHET",
          "MUSIC_CROTCHET"
        ],
        [
          "MUSIC_QUAVER",
          "MUSIC_QUAVER"
        ],
        [
          "MUSIC_QUAVERS",
          "MUSIC_QUAVERS"
        ],
        [
          "PITCHFORK",
          "PITCHFORK"
        ],
        [
          "XMAS",
          "XMAS"
        ],
        [
          "PACMAN",
          "PACMAN"
        ],
        [
          "TARGET",
          "TARGET"
        ],
        [
          "TSHIRT",
          "TSHIRT"
        ],
        [
          "ROLLERSKATE",
          "ROLLERSKATE"
        ],
        [
          "DUCK",
          "DUCK"
        ],
        [
          "HOUSE",
          "HOUSE"
        ],
        [
          "TORTOISE",
          "TORTOISE"
        ],
        [
          "BUTTERFLY",
          "BUTTERFLY"
        ],
        [
          "STICKFIGURE",
          "STICKFIGURE"
        ],
        [
          "GHOST",
          "GHOST"
        ],
        [
          "SWORD",
          "SWORD"
        ],
        [
          "GIRAFFE",
          "GIRAFFE"
        ],
        [
          "SKULL",
          "SKULL"
        ],
        [
          "UMBRELLA",
          "UMBRELLA"
        ],
        [
          "SNAKE",
          "SNAKE"
        ],
        [
          "ALL_CLOCKS",
          "ALL_CLOCKS"
        ],
        [
          "ALL_ARROWS",
          "ALL_ARROWS"
        ]
      ]
    }
  ],
  "output": [
    "yolobit_image",
    "Array"
  ],
  "colour": 300,
  "tooltip": "Specify one of the built-in images.",
  "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/image.html#attributes"
},
{
  "type": "yolobit_basic_create_image",
  "message0": "create image %1 %2 %3 %4 %5 %6 %7 %8 %9 %10 %11 %12 %13 %14 %15 %16 %17 %18 %19 %20 %21 %22 %23 %24 %25 %26 %27 %28 %29 %30",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "field_colour",
      "name": "00",
      "colour": "#000000"
    },
    {
      "type": "field_colour",
      "name": "01",
      "colour": "#000000"
    },
    {
      "type": "field_colour",
      "name": "02",
      "colour": "#000000"
    },
    {
      "type": "field_colour",
      "name": "03",
      "colour": "#000000"
    },
    {
      "type": "field_colour",
      "name": "04",
      "colour": "#000000"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "field_colour",
      "name": "10",
      "colour": "#000000"
    },
    {
      "type": "field_colour",
      "name": "11",
      "colour": "#000000"
    },
    {
      "type": "field_colour",
      "name": "12",
      "colour": "#000000"
    },
    {
      "type": "field_colour",
      "name": "13",
      "colour": "#000000"
    },
    {
      "type": "field_colour",
      "name": "14",
      "colour": "#000000"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "field_colour",
      "name": "20",
      "colour": "#000000"
    },
    {
      "type": "field_colour",
      "name": "21",
      "colour": "#000000"
    },
    {
      "type": "field_colour",
      "name": "22",
      "colour": "#000000"
    },
    {
      "type": "field_colour",
      "name": "23",
      "colour": "#000000"
    },
    {
      "type": "field_colour",
      "name": "24",
      "colour": "#000000"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "field_colour",
      "name": "30",
      "colour": "#000000"
    },
    {
      "type": "field_colour",
      "name": "31",
      "colour": "#000000"
    },
    {
      "type": "field_colour",
      "name": "32",
      "colour": "#000000"
    },
    {
      "type": "field_colour",
      "name": "33",
      "colour": "#000000"
    },
    {
      "type": "field_colour",
      "name": "34",
      "colour": "#000000"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "field_colour",
      "name": "40",
      "colour": "#000000"
    },
    {
      "type": "field_colour",
      "name": "41",
      "colour": "#000000"
    },
    {
      "type": "field_colour",
      "name": "42",
      "colour": "#000000"
    },
    {
      "type": "field_colour",
      "name": "43",
      "colour": "#000000"
    },
    {
      "type": "field_colour",
      "name": "44",
      "colour": "#000000"
    }
  ],
  "output": "yolobit_image",
  "colour": 300,
  "tooltip": "Create a new image.",
  "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/image.html#microbit.Image"
},
{
  "type": "yolobit_basic_sleep",
  "message0": "sleep %1 milliseconds",
  "args0": [
    {
      "type": "input_value",
      "name": "duration",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 210,
  "tooltip": "Pause program for the specified time in milliseconds.",
  "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/microbit.html#microbit.sleep"
},
{
  "type": "yolobit_basic_clear_display",
  "message0": "clear screen",
  "previousStatement": null,
  "nextStatement": null,
  "colour": 0,
  "tooltip": "Clear the display - set the brightness of all LEDs to 0 (off).",
  "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/display.html#microbit.display.clear"
},
{
  "type": "yolobit_basic_forever",
  "message0": "on start                  . %1 %2 forever                  . %3 %4",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "ONSTART"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "FOREVER"
    }
  ],
  "colour": 230,
  "tooltip": "on start: code run when program starts and only once. forever: code repeated forever",
  "helpUrl": ""
}
]
