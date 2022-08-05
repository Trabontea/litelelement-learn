import {LitElement, html, css} from 'lit-element';

export class MoreExpressions extends LitElement {
  static properties = {
    checked: {},
  };

  static get styles() {
    return css`
      :host {
        display: block;
        padding: 25px 10px;
        color: var(--bd-com-text-color, #000);
      }

      input {
        padding:10px;
        border-radius:10px;
        border:1px solid #eee;
        box-shadow:0 0 15px 4px rgba(0,0,0,0.06);
      }

      label {
        display: inline-block;
        margin-top: 10px;
      }
    `;
  }

  constructor() {
    super();
    this.checked = false
    this.checkedInput = true
    this.isHidden= true;
  }

  render() {
    return html`
      <div>
        <h2>More expressions and Reactivity</h3>
        <!-- Boolean attribute -->
        <p ?hidden=${this.isHidden}>I may be in hiding.</p>
         <!-- TODO: Add expression to in put. -->
         <input type="text" value="Hello there." ?disabled=${this.checkedInput}>
      </div>
      <label><input type="checkbox" @change=${this.setChecked}> Enable editing and show paragraph</label>
    `;
  }

  setChecked(event) {
    this.checked = event.target.checked;
    this.checkedInput = !this.checked;
    this.isHidden= !this.isHidden;
    console.log('event.target.checked', event.target.checked) // true m or false
  }
}
customElements.define('more-expressions', MoreExpressions);
