import Form from "./components/Form.js";
import ElementGroup from "./components/ElementGroup.js";

import InputText from "./components/formElements/InputText.js";
import InputNumber from "./components/formElements/InputNumber.js";
import InputEmail from "./components/formElements/InputEmail.js";
import Textarea from "./components/formElements/Textarea.js";
import InputRadios from "./components/formElements/factories/InputRadios.js";
import InputRadioEntry from "./components/formElements/factories/InputRadioEntry.js";
import InputCheckboxes from "./components/formElements/factories/InputCheckboxes.js";
import InputCheckboxEntry from "./components/formElements/factories/InputCheckboxEntry.js";

class App {
  static init(htmlRoot) {
    const form = new Form(
      htmlRoot,
      "Sponsorship Application",
      new ElementGroup(true, new InputText("name", "Name")),

      new ElementGroup(true, new InputEmail("email", "Email")),

      new ElementGroup(true, new InputNumber("phone-number", "Phone number")),

      new ElementGroup(
        true,
        new InputRadios(
          "contact-mode",
          "How would you like to be contacted",
          new InputRadioEntry("email", "Email"),
          new InputRadioEntry("phone", "Phone")
        )
      ),

      new ElementGroup(
        false,
        new InputCheckboxes(
          "vehicle",
          "How did you hear about us",
          new InputCheckboxEntry("linkedin", "LinkedIn"),
          new InputCheckboxEntry("socialmedia", "Socialmedia"),
          new InputCheckboxEntry("website", "Website"),
          new InputCheckboxEntry("other", "Other")
        )
      ),

      new ElementGroup(false, new Textarea("comment", "Please leave a comment"))
    );
  }
}

window.addEventListener("load", App.init("root"));
