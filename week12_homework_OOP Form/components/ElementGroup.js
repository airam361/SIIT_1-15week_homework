import FormElement from "./formElements/FormElement.js";

class ElementGroup {
  constructor(required, inputElement) {
    this.required = required;
    if (!(inputElement instanceof FormElement)) {
      throw new Error("This element must be a FORM ELEMENT!");
    }
    this.inputElement = inputElement;
  }

  validation() {
    if (this.required) {
      return this.inputElement.validation();
    } else return true;
  }

  getValue() {
    return this.inputElement.getValue();
  }

  attachEvent() {
    if (this.required) this.inputElement.attachEvent();
  }

  returnElementGoup() {
    this.elementGroup = document.createElement("div");
    this.elementGroup.className = "control-group";
    if (this.required) {
      this.inputElement.addRequiredMark();
    }
    this.elementGroup.innerHTML = this.inputElement.returnHTML();
    return this.elementGroup;
  }
}

export default ElementGroup;
