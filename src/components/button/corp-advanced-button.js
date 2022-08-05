import { html, customElement, css } from "lit-element";
import { CorpButton } from "./corp-button.js";
import {corpStylesButton} from './CorpStylesButton.js'

// Inheritance is a core concept of any Object-Oriented Programming.

//The new class extends from CorpButton(the previous class-component) instead of LitElement. 
// This means the CorpButton class can inherit attributes and behavior from its parent class.
export class CorpAdvancedButton extends CorpButton {

  // static get styles() {
  //   return [ css`...`, css`...`];
  // }

  static styles = [
    corpStylesButton,
    css`
      .corp-button:hover {
        background-color: #008cba;
        color: white;
      }
    `
  ];

  render() {
    return html`
      <button class="corp-button"><slot></slot></button>
    `;
  }
}


customElements.define("corp-advanced-button",  CorpAdvancedButton)