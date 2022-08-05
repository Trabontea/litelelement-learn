import { LitElement, html } from "lit-element";
import { navigator } from "lit-element-router";
import {NavLinkStyles} from './nav-link.styles.js'

class NavLink extends navigator(LitElement) {
  static get properties() {
    return {
      href: { type: String },
    };
  }

  static styles = NavLinkStyles;
  constructor() {
    super();
    this.href = "";
  }
  render() {
    return html`
      <a class="nav-link" href="${this.href}" @click="${this.handleClick}">
        <slot></slot>
      </a>
    `;
  }
  handleClick(e) {
    e.preventDefault();
    this.navigate(this.href);
  }
}

customElements.define("nav-link", NavLink);