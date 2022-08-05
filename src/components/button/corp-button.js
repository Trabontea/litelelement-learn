import { LitElement, html, customElement, css } from "lit-element";
import {corpStylesButton} from './CorpStylesButton.js'

export class CorpButton extends LitElement {
  constructor() {
    super()
  }
  static styles = corpStylesButton

  render() {
    return html`
      <button class="corp-button"><slot></slot></button>
    `;
  }
}

customElements.define('corp-button', CorpButton)

// see https://www.thisdot.co/blog/how-to-share-styles-in-web-components-with-litelement-and-typescript/