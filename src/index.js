my_array = [
  [
    [
      [1, 2],
      [3, 4],
    ],
    [
      [5, 6],
      [7, 8],
    ],
  ],
  [
    [
      [9, 10],
      [11, 12],
    ],
    [
      [13, 14],
      [15, 16],
    ],
  ],
];

const arr = [1, 2, [3, 4, [5]], 6];

//FlatMap(arr) => [1,2,3,4,5,6]

// [1,2, FlatMap(el), el, 6]
// [1,2, [3,4,5], 6]
