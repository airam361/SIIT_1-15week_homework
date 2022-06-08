import FormElement from "./FormElement.js";

class InputRadio extends FormElement {
  constructor(id, value, name, labelText) {
    super();
    this.id = id;
    this.value = value;
    this.name = name;
    this.labelText = labelText;
  }  

  returnHTML() {
    return `
      <input type="radio" id="${this.id}" name="${this.name}" value="${this.value}"/>
      <label for="${this.id}">${this.labelText}</label>
    `;
  }
}

export default InputRadio;
