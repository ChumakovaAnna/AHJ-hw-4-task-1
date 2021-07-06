import Widget from "./Widget";

console.log("Started");

const widget = new Widget();
widget.bindInputToDOM(document.querySelector(".input"));
widget.bindButtonToDOM(document.querySelector(".button"));
widget.bindInfoToDOM(document.querySelector(".info"));
widget.addListener();
