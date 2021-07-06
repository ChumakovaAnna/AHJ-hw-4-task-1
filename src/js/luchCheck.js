/**
   * Проверем номер карты по алгоритму Luhn
   */
export default function luhnCheck(number) {
  const arr = [];
  const cardNumber = number.toString();
  for (let i = 0; i < cardNumber.length; i += 1) {
    if (i % 2 === 0) {
      const m = parseInt(cardNumber[i], 10) * 2;
      if (m > 9) {
        arr.push(m - 9);
      } else {
        arr.push(m);
      }
    } else {
      const n = parseInt(cardNumber[i], 10);
      arr.push(n);
    }
  }
  const sum = arr.reduce((a, b) => a + b);
  return Boolean(!(sum % 10));
}
