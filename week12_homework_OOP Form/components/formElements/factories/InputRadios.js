import FormElement from "../FormElement.js";
import InputRadio from "../InputRadio.js";
import InputRadioEntry from "./InputRadioEntry.js";

class InputRadios extends FormElement {
  constructor(name, labelText, ...inputRadioEntries) {
    super();
    this.name = name;
    this.labelText = labelText;
    this.id = this.idGenerator();
    for (const inputRadioEntry of inputRadioEntries) {
      if (!(inputRadioEntry instanceof InputRadioEntry)) {
        throw new Error("Entries must be instances of InputRadioEntry !");
      }
    }
    this.inputRadioEntries = inputRadioEntries;
  }

  validation() {
    const radios = document.getElementsByName(this.name);
    let validity = false;
    for (const radio of radios) {
      if (radio.checked) {
        validity = true;
        break;
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
    for (const radio of radios) {
      if (radio.checked) {
        return radio.value;
      }
    }
  }

  returnHTML() {
    let template = `<label class="${this.labelClasses}">${this.labelText}</label> <div id="${this.id}">`;
    for (const inputRadioEntry of this.inputRadioEntries) {
      const radio = new InputRadio(
        this.idGenerator(),
        inputRadioEntry.value,
        this.name,
        inputRadioEntry.labelText
      );
      template += radio.returnHTML();
    }
    template += "</div>";

    return template;
  }
}

export default InputRadios;
