import FormElement from "./FormElement.js";

class InputEmail extends FormElement {
  constructor(name, labelText) {
    super();
    this.name = name;
    this.labelText = labelText;
    this.id = this.idGenerator();
  }

  validation() {
    if (
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.input.value)
    ) {
      this.input.classList.remove("invalid");
      return true;
    }
    this.input.classList.add("invalid");
    return false;
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
      <input id="${this.id}" type="text" name="${this.name}"/>
    `;
  }
}

export default InputEmail;
