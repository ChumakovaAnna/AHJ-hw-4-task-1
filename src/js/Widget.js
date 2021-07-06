import checkPaymentSystem from "./checkPaymentSystem";
import validateCardNumber from "./validateCardNumber";
import luhnCheck from "./luchCheck";

export default class Widget {
  constructor() {
    this.container = null;
    this.button = null;
    this.card = null;
    this.info = null;
  }

  /**
   * Проверяет, является ли container HTML-элемент
   * @param  {} container - HTML-элемент input
   */
  bindInputToDOM(container) {
    if (!(container instanceof HTMLElement)) {
      throw new Error("container is not HTMLElement");
    }
    this.container = container;
  }

  /**
   * Проверяет, является ли button HTML-элемент
   * @param  {} button - HTML-элемент button в form
   */
  bindButtonToDOM(button) {
    if (!(button instanceof HTMLElement)) {
      throw new Error("button is not HTMLElement");
    }
    this.button = button;
  }

  /**
   * Проверяет, является ли error HTML-элемент
   * @param  {} error - HTML-элемент
   */
  bindInfoToDOM(info) {
    if (!(info instanceof HTMLElement)) {
      throw new Error("Error is not HTMLElement");
    }
    this.info = info;
  }

  /**
   * Добавляем слушатель событий на widget
   */
  addListener() {
    this.preventDefault();
    this.container.addEventListener("change", () => {
      if (validateCardNumber(this.container.value)) {
        luhnCheck(this.container.value);
        this.info.innerText = "верный номер карты";
        this.info.style.color = "green";
      } else {
        this.info.innerText = "неверный номер карты";
        this.info.style.color = "red";
      }
      Widget.findAllHTMLPaySys();
      this.container.value = "";
    });

    this.container.addEventListener("input", () => {
      Widget.findAllHTMLPaySys();
      this.info.innerText = "";
      const paySystem = checkPaymentSystem(this.container.value);
      Widget.changeHTMLPaySys(paySystem);
    });
  }

  /**
   * Сбрасываем работу кнопки по умолчанию
   */
  preventDefault() {
    this.button.addEventListener("click", (event) => {
      event.preventDefault();
    });
  }

  /**
   * Находит нужный HTML-элемент и делает его активным, удаляя класс
   */
  static changeHTMLPaySys(string) {
    if (string === "other") {
      return false;
    }
    const element = document.querySelector(`[data-paySystem=${string}]`);
    element.classList.remove("not_active");
    return true;
  }

  /**
   * возвращает всем HTML-элементам неактивное состояние, добавляя класс
   */

  static findAllHTMLPaySys() {
    const allImg = document.querySelectorAll(".card_img");
    allImg.forEach((ele) => {
      if (!ele.classList.contains("not_active")) {
        ele.classList.add("not_active");
      }
    });
  }
}
