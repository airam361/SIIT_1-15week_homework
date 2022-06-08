import FormElement from "./FormElement.js";

class Textarea extends FormElement {
  constructor(name, labelText) {
    super();
    this.name = name;
    this.labelText = labelText || "";
    this.id = this.idGenerator();
  }

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
    const textarea = `<textarea id="${this.id}" name="${this.name}" placeholder="Please write here..."></textarea>`;

    if (this.labelText !== "") {
      return `
        <label for="${this.id}" class="${this.labelClasses}">${this.labelText}</label>
        ${textarea}
      `;
    } else {
      return textarea;
    }
  }
}

export default Textarea;
