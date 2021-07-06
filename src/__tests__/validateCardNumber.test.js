import validateCardNumber from "../js/validateCardNumber";

describe("validateCardNumber", () => {
  test.each([
    ["false", "5486 7320 klkl 9655", false],
    ["true", "5486 7320 1361 9655", true],
  ])("%s", (name, number, expected) => {
    const result = validateCardNumber(number);

    expect(result).toBe(expected);
  });
});
