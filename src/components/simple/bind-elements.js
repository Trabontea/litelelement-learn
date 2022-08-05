import { LitElement, html, css } from 'lit-element';
import '../button/corp-button.js'

class BindElement extends LitElement {
    static get properties() {
      return {
        prop1: {type: String},
        prop2: {type: String},
        prop3: {type: Boolean},
        prop4: {type: String}
      };
    }
    static get styles() {
      return css`
        :host {
          display: block;
          padding: 25px 10px;
          color: var(--bd-com-text-color, #000);
        }
        div {
          margin-bottom: 8px;
        }

        input {
          padding:10px;
          border-radius:10px;
          border:1px solid #2b2b2b; // add only bottom border
          box-shadow:0 0 15px 4px rgba(0,0,0,0.06);
        }
      `;
    }

    constructor() {
      super();
      this.prop1 = 'text binding';
      this.prop2 = 'mydiv';
      this.prop3 = true;
      this.prop4 = 'pie';
    }
    render() {
      return html`
        <h2>Binding Elements</h3>
        <!-- text binding -->
        <div>${this.prop1}</div>
  
        <!-- attribute binding -->
        <div id="${this.prop2}">attribute binding</div>
  
        <!-- boolean attribute binding -->
        <div>
          boolean attribute binding
          <input type="text" ?disabled="${this.prop3}"/>
        </div>
  
        <!-- property binding -->
        <div>
          property binding
          <input type="text" .value="${this.prop4}"/>
        </div>
  
        <!-- event handler binding -->
        <div>event handler binding
          <corp-button @click="${this.clickHandler}">Click Me</corp-button>
        </div>
      `;
    }
    clickHandler(e) {
      console.log('event handler biddng', e.target, e.currentTarget);
    }
  }
  
  customElements.define('bind-element', BindElement);