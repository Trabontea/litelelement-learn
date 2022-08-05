import { LitElement, css, html } from "lit-element";

class Async extends LitElement {
  static get styles() {
    return [css`.page {padding: 0 10px}`];
  }
  render() {
    return html` <div class="page">
      <h1>This is Async Page</h1>
    </div>`;
  }
  static get properties() {
    return {
      eg: {
        type: String,
      },
    };
  }
  constructor() {
    super();
  }
}
customElements.define("async-page", Async);