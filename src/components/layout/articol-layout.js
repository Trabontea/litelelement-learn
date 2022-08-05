import { LitElement, css, html } from "lit-element";

export class Articol extends LitElement {
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
    `;
  }

  render() {
    return html`
      <div class="page"><slot></slot></div>
    `
  }
}

customElements.define('articol-layout', Articol)