import { LitElement, css, html } from "lit-element";

export class Page extends LitElement {
  constructor() {
    super()
  }

  static get styles() {
    return css` 
    :host {
      display: block;
      padding: 25px 10px;
      color: var(--bd-com-text-color, #000);
    }

    h1 {
      text-align: center
    }
    `;
  }

  render() {
    return html`
      <div class="page"><slot></slot></div>
    `
  }
}

customElements.define('page-layout', Page)