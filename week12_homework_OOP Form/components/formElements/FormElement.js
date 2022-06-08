class FormElement {
  idGenerator() {
    return Math.floor(Math.random() * Math.pow(10, 9));
  }

  addRequiredMark() {
    this.labelClasses = "required";
  }
}

export default FormElement;
