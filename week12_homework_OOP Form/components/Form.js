import Component from "./Component.js";

class Form extends Component {
  formData = { formTitle: "", formId: 0, formInputs: {} };

  constructor(renderHookId, title, ...elementGroups) {
    super(renderHookId, false);
    this.title = title;
    this.formData.formTitle = title;
    this.elementGroups = elementGroups;
    this.render();
  }

  submitHandler(event) {
    event.preventDefault();
    let count = 0;

    this.elementGroups.forEach((elementGroup) => {
      if (elementGroup.validation()) {
        this.formData.formInputs[elementGroup.inputElement.name] =
          elementGroup.getValue();
      } else {
        count++;
      }
    });

    if (count > 0) {
      alert(`${count} incomplete input fields detected. Please verify input fields!`);
      return;
    }

    alert("Thank you for your application!")
    this.form.reset()

    console.log(this.formData);
  }

  attachSubmitEvent() {
    this.form
      .querySelector("button[type=submit]")
      .addEventListener("click", this.submitHandler.bind(this));
  }

  render() {
    this.id = this.idGenerator();
    this.formData.formId = this.id;

    this.form = this.createComponent("form", "form", [
      { name: "autocomplete", value: "on" },
    ]);
    this.form.id = this.id;

    this.form.innerHTML = `
      <section> 
        <h1>${this.title}</h1>
      </section>      
      <section id="form-${this.id}"></section>
      <section class="required">
        <span>required fields</span>
      </section>
      <section class="action">
        <button type="submit" class="btn-submit">Apply</button>
      </section>
    `;

    this.attachSubmitEvent();

    this.elementGroups.forEach((elementGroup) => {
      this.form
        .querySelector(`form[id="${this.id}"] section[id]`)
        .append(elementGroup.returnElementGoup());
      elementGroup.attachEvent();
    });
  }
}

export default Form;
