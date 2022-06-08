import FormElement from "./FormElement.js";

class InputText extends FormElement {
  constructor(name, labelText) {
    super();
    this.name = name;
    this.labelText = labelText;
    this.id = this.idGenerator();
  }

  // addRequiredMark() {
  //   this.classes = "required";
  // }

  validation() {
    if (this.input.value.trim() === "") {
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
      <input id="${this.id}" type="text" name="${this.name}"/>
    `;
  }
}

export default InputText;
