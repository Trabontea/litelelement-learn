import { LitElement, css, html } from "lit-element";
import '../../components/simple/sec-com.js'
import '../../components/simple/bind-elements.js'
import '../../components/simple/name-tag.js'
import '../../components/simple/more-expressions.js'
import '../../components/simple/simple-todo-list.js'

class Home extends LitElement {
  static get styles() {
    return [css` h1 {
      text-align: center
    }`];
  }

  render() {
    return html` <div>
      <h1>This is Home Page</h1>
      <sec-com></sec-com>
      <bind-element></bind-element>
      <name-tag></name-tag>
      <more-expressions></more-expressions>
      <simple-todo-list></simple-todo-list>
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

customElements.define("home-page", Home);