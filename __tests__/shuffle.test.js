const shuffle = require("../src/shuffle");

describe("shuffle should...", () => {

  test("shuffle an array", () => {
    const array = [1, 2, 3, 4, 5];
    const shuffledArray = shuffle(array);
    expect(shuffledArray).toHaveLength(array.length);
    array.forEach(element => {
      expect(shuffledArray).toContain(element);
    });
  });

  test("return an empty array when input is empty", () => {
    const array = [];
    const shuffledArray = shuffle(array);
    expect(shuffledArray).toEqual([]);
  });
});
