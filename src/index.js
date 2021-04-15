import { LitElement, html } from "lit-element";
import "@lion/listbox/lion-listbox.js";
import "@lion/listbox/lion-option.js";

class MyBug extends LitElement {
  static get properties() {
    return {
      options: { type: Array },
    };
  }

  constructor() {
    super();

    this.options = ["Option 1"];
  }
  render() {
    return html`
      <button @click=${this.addOption}>Add an option</button>
      <button @click=${this.removeOption}>Remove last option</button>
      <lion-listbox>
        ${this.options.map(
          (option) =>
            html` <lion-option .choiceValue=${option}>${option}</lion-option> `
        )}
      </lion-listbox>
    `;
  }
  addOption() {
    this.options.push(`Option ${this.options.length + 1}`);
    this.options = [...this.options];
    this.requestUpdate();
  }

  removeOption() {
    this.options.pop();
    this.options = [...this.options];
    this.requestUpdate();
  }
}

customElements.define("my-bug", MyBug);
