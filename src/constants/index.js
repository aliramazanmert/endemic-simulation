export const NUM_COLS = 50;
export const NUM_ROWS = 25;

export const TIME_TO_RECOVER = 48;
export const INFECTION_CHANCE_FAR = 0.005;
export const INFECTION_CHANCE_CLOSE = 0.01;

export const QUARANTINE_CONDITIONS = [
  [
    [
      [
        { x: -1, y: -1, wall: "left" },
        { x: -1, y: -1, wall: "top" },
      ],
      [
        { x: 0, y: 0, wall: "left" },
        { x: 0, y: 0, wall: "top" },
      ],
      [
        { x: 0, y: -1, wall: "top" },
        { x: 0, y: 0, wall: "top" },
      ],
      [
        { x: 0, y: 0, wall: "left" },
        { x: -1, y: 0, wall: "left" },
      ],
      [
        { x: -1, y: -1, wall: "right" },
        { x: -1, y: -1, wall: "bottom" },
      ],
      [
        { x: -2, y: -2, wall: "right" },
        { x: -2, y: -2, wall: "bottom" },
      ],
      [
        { x: -2, y: -2, wall: "right" },
        { x: -1, y: -1, wall: "left" },
      ],
      [
        { x: -2, y: -2, wall: "bottom" },
        { x: -1, y: -1, wall: "top" },
      ],
    ],
    [[{ x: -1, y: -1, wall: "top" }], [{ x: 0, y: 0, wall: "top" }], [{ x: -1, y: 0, wall: "left" }]],
    [[{ x: -1, y: 0, wall: "top" }], [{ x: 0, y: 0, wall: "top" }]],
    [[{ x: -1, y: 1, wall: "top" }], [{ x: 0, y: 0, wall: "top" }], [{ x: -1, y: 0, wall: "right" }]],
    [
      [
        { x: -1, y: 1, wall: "right" },
        { x: -1, y: 1, wall: "top" },
      ],
      [
        { x: 0, y: 0, wall: "right" },
        { x: 0, y: 0, wall: "top" },
      ],
      [
        { x: 0, y: 1, wall: "top" },
        { x: 0, y: 0, wall: "top" },
      ],
      [
        { x: 0, y: 0, wall: "right" },
        { x: -1, y: 0, wall: "right" },
      ],
      [
        { x: -1, y: 1, wall: "left" },
        { x: -1, y: 1, wall: "bottom" },
      ],
      [
        { x: -2, y: 2, wall: "left" },
        { x: -2, y: 2, wall: "bottom" },
      ],
      [
        { x: -2, y: 2, wall: "left" },
        { x: -1, y: 1, wall: "right" },
      ],
      [
        { x: -2, y: 2, wall: "bottom" },
        { x: -1, y: 1, wall: "top" },
      ],
    ],
  ],
  [
    [[{ x: -1, y: -1, wall: "left" }], [{ x: 0, y: 0, wall: "left" }], [{ x: 0, y: -1, wall: "top" }]],
    [
      [
        { x: 0, y: 0, wall: "left" },
        { x: 0, y: 0, wall: "top" },
      ],
      [
        { x: 0, y: -1, wall: "top" },
        { x: 0, y: 0, wall: "top" },
      ],
      [
        { x: 0, y: 0, wall: "left" },
        { x: -1, y: 0, wall: "left" },
      ],
      [
        { x: -1, y: -1, wall: "right" },
        { x: -1, y: -1, wall: "bottom" },
      ],
    ],
    [[{ x: 0, y: 0, wall: "top" }]],
    [
      [
        { x: 0, y: 0, wall: "right" },
        { x: 0, y: 0, wall: "top" },
      ],
      [
        { x: 0, y: 1, wall: "top" },
        { x: 0, y: 0, wall: "top" },
      ],
      [
        { x: 0, y: 0, wall: "right" },
        { x: -1, y: 0, wall: "right" },
      ],
      [
        { x: -1, y: 1, wall: "left" },
        { x: -1, y: 1, wall: "bottom" },
      ],
    ],
    [[{ x: -1, y: 1, wall: "right" }], [{ x: 0, y: 0, wall: "right" }], [{ x: 0, y: 1, wall: "top" }]],
  ],
  [
    [[{ x: 0, y: -1, wall: "left" }], [{ x: 0, y: 0, wall: "left" }]],
    [[{ x: 0, y: 0, wall: "left" }]],
    [],
    [[{ x: 0, y: 0, wall: "right" }]],
    [[{ x: 0, y: 1, wall: "right" }], [{ x: 0, y: 0, wall: "right" }]],
  ],
  [
    [[{ x: 1, y: -1, wall: "left" }], [{ x: 0, y: 0, wall: "left" }], [{ x: 0, y: -1, wall: "bottom" }]],
    [
      [
        { x: 0, y: 0, wall: "left" },
        { x: 0, y: 0, wall: "bottom" },
      ],
      [
        { x: 0, y: -1, wall: "bottom" },
        { x: 0, y: 0, wall: "bottom" },
      ],
      [
        { x: 0, y: 0, wall: "left" },
        { x: 1, y: 0, wall: "left" },
      ],
      [
        { x: 1, y: -1, wall: "right" },
        { x: 1, y: -1, wall: "top" },
      ],
    ],
    [[{ x: 0, y: 0, wall: "bottom" }]],
    [
      [
        { x: 0, y: 0, wall: "right" },
        { x: 0, y: 0, wall: "bottom" },
      ],
      [
        { x: 0, y: 1, wall: "bottom" },
        { x: 0, y: 0, wall: "bottom" },
      ],
      [
        { x: 0, y: 0, wall: "right" },
        { x: 1, y: 0, wall: "right" },
      ],
      [
        { x: 1, y: 1, wall: "left" },
        { x: 1, y: 1, wall: "top" },
      ],
    ],
    [[{ x: 1, y: 1, wall: "right" }], [{ x: 0, y: 0, wall: "right" }], [{ x: 0, y: 1, wall: "bottom" }]],
  ],
  [
    [
      [
        { x: 1, y: -1, wall: "left" },
        { x: 1, y: -1, wall: "bottom" },
      ],
      [
        { x: 0, y: 0, wall: "left" },
        { x: 0, y: 0, wall: "bottom" },
      ],
      [
        { x: 0, y: -1, wall: "bottom" },
        { x: 0, y: 0, wall: "bottom" },
      ],
      [
        { x: 0, y: 0, wall: "left" },
        { x: 1, y: 0, wall: "left" },
      ],
      [
        { x: 1, y: -1, wall: "right" },
        { x: 1, y: -1, wall: "top" },
      ],
      [
        { x: 2, y: -2, wall: "right" },
        { x: 2, y: -2, wall: "top" },
      ],
      [
        { x: 2, y: -2, wall: "right" },
        { x: 1, y: -1, wall: "left" },
      ],
      [
        { x: 2, y: -2, wall: "top" },
        { x: 1, y: -1, wall: "bottom" },
      ],
    ],
    [[{ x: 1, y: -1, wall: "bottom" }], [{ x: 0, y: 0, wall: "bottom" }], [{ x: 1, y: 0, wall: "left" }]],
    [[{ x: 1, y: 0, wall: "bottom" }], [{ x: 0, y: 0, wall: "bottom" }]],
    [[{ x: 1, y: 1, wall: "bottom" }], [{ x: 0, y: 0, wall: "bottom" }], [{ x: 1, y: 0, wall: "right" }]],
    [
      [
        { x: 1, y: 1, wall: "right" },
        { x: 1, y: 1, wall: "bottom" },
      ],
      [
        { x: 0, y: 0, wall: "right" },
        { x: 0, y: 0, wall: "bottom" },
      ],
      [
        { x: 0, y: 1, wall: "bottom" },
        { x: 0, y: 0, wall: "bottom" },
      ],
      [
        { x: 0, y: 0, wall: "right" },
        { x: 1, y: 0, wall: "right" },
      ],
      [
        { x: 1, y: 1, wall: "left" },
        { x: 1, y: 1, wall: "top" },
      ],
      [
        { x: 2, y: 2, wall: "left" },
        { x: 2, y: 2, wall: "top" },
      ],
      [
        { x: 2, y: 2, wall: "left" },
        { x: 1, y: 1, wall: "right" },
      ],
      [
        { x: 2, y: 2, wall: "top" },
        { x: 1, y: 1, wall: "bottom" },
      ],
    ],
  ],
];
