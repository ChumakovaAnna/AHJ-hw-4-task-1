import checkPaymentSystem from "../js/checkPaymentSystem";

describe("checkPaymentSystem", () => {
  test.each([
    ["mir", "2486 7320 1361 9655", "mir"],
    ["diners-club", "3086 7320 1361 9655", "diners-club"],
    ["diners-club", "3686 7320 1361 9655", "diners-club"],
    ["diners-club", "3886 7320 1361 9655", "diners-club"],
    ["jcb", "3186 7320 1361 9655", "jcb"],
    ["jcb", "3586 7320 1361 9655", "jcb"],
    ["american-express", "3486 7320 1361 9655", "american-express"],
    ["american-express", "3786 7320 1361 9655", "american-express"],
    ["other", "3286 7320 1361 9655", "other"],
    ["visa", "4286 7320 1361 9655", "visa"],
    ["mastercard", "5286 7320 1361 9655", "mastercard"],
    ["discover", "6086 7320 1361 9655", "discover"],
    ["other", "69086 7320 1361 9655", "other"],
    ["other", "7086 7320 1361 9655", "other"],
  ])("%s", (name, number, expected) => {
    const result = checkPaymentSystem(number);

    expect(result).toBe(expected);
  });
});
