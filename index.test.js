const calculateBMI = require("./index");

test("Add numbers", () => {
  expect(calculateBMI(65, 180)).toBe("normal");
});
