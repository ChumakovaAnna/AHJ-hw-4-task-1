export default function checkPaymentSystem(number) {
  const numberStr = number.toString();
  const firstNum = Number(numberStr[0]);
  const secondNum = Number(numberStr[1]);

  switch (firstNum) {
    case 2:
      return "mir";
    case 3:

      switch (secondNum) {
        case 0:
        case 6:
        case 8:
          return "diners-club";

        case 1:
        case 5:
          return "jcb";

        case 4:
        case 7:
          return "american-express";

        default:
          return "other";
      }

    case 4:
      return "visa";
    case 5:
      return "mastercard";
    case 6:
      if (secondNum === 0) {
        return "discover";
      }
      return "other";

    default:
      return "other";
  }
}
