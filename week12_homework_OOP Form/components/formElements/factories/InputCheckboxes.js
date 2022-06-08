import FormElement from "../FormElement.js";
import InputCheckbox from "../InputCheckbox.js";
import InputCheckboxEntry from "./InputCheckboxEntry.js";

class InputCheckboxes extends FormElement {
  constructor(name, labelText, ...inputCheckboxEntries) {
    super();
    this.name = name;
    this.labelText = labelText;
    this.id = this.idGenerator();
    for (const inputCheckboxEntry of inputCheckboxEntries) {
      if (!(inputCheckboxEntry instanceof InputCheckboxEntry)) {
        throw new Error("Entries must be instances of InputCheckboxEntry !");
      }
    }
    this.inputCheckboxEntries = inputCheckboxEntries;
  }

  validation() {
    const radios = document.getElementsByName(this.name);
    let validity = false;
    for (const radio of radios) {
      if (radio.checked) {
        validity = true;
      }
    }
    if (!validity) {
      this.radioGroup.classList.add("invalid");
      return validity;
    }
    this.radioGroup.classList.remove("invalid");
    return validity;
  }

  attachEvent() {
    this.radioGroup = document.querySelector(`div[id="${this.id}"]`);

    this.radioGroup.addEventListener("focusout", this.validation.bind(this));
  }

  getValue() {
    const radios = document.getElementsByName(this.name);
    let selected = [];
    for (const radio of radios) {
      if (radio.checked) {
        selected.push(radio.value);
      }
    }
    return selected;
  }

  returnHTML() {
    let template = `<label class="${this.labelClasses}">${this.labelText}</label> <div id="${this.id}">`;
    for (const inputCheckboxEntry of this.inputCheckboxEntries) {
      const checkbox = new InputCheckbox(
        this.idGenerator(),
        inputCheckboxEntry.value,
        this.name,
        inputCheckboxEntry.labelText
      );
      template += checkbox.returnHTML();
    }
    template += "</div>";

    return template;
  }
}

export default InputCheckboxes;
