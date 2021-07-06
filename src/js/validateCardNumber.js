/**
   * Проверяем валидность вводимого номера карты
   */
export default function validateCardNumber(value) {
  const number = value.replace(/\s/g, "");
  const regex = new RegExp(/^[0-9]+$/);
  if (!regex.test(number)) {
    return false;
  }

  return true;
}
