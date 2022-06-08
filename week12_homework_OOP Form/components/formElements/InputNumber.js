import FormElement from "./FormElement.js";

class InputNumber extends FormElement {
  constructor(name, labelText) {
    super();
    this.name = name;
    this.labelText = labelText;
    this.id = this.idGenerator();
  }

  validation() {
    if (!(this.input.value.length === 10)) {
      this.input.classList.add("invalid");
      return false;
    } else {
      this.input.classList.remove("invalid");
      return true;
    }
  }

  attachEvent() {
    this.input = document.getElementById(this.id);

    this.input.addEventListener("focusout", this.validation.bind(this));
  }

  getValue() {
    return document.getElementById(this.id).value;
  }

  returnHTML() {
    return `
      <label for="${this.id}" class="${this.labelClasses}">${this.labelText}</label>
      <input id="${this.id}" type="number" name="${this.name}"/>
    `;
  }
}

export default InputNumber;
