import { html, css, LitElement } from 'lit-element';

export class SecCom extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 25px 10px;
        color: var(--bd-com-text-color, #000);
      }
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      square: { type: Number },
    };
  }

  constructor() {
    super();
    this.title = 'Hey world';
    this.square = 'First Code';
  }

  render() {
    return html`
      <h2>Use expression</h2>
      <h3>${this.title}! ${this.square}!</h2>
    `;
  }
}

customElements.define('sec-com', SecCom)