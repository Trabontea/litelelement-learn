import { LitElement, html, css } from "lit-element";
//To add interactivity to your components, 
//you'll probably want to add some event handlers

export class NameTag extends LitElement {
    static properties = {
      name: {},
    };
  
    constructor() {
      super();
      this.name = 'Your name here';
    }

    static get styles() {
      return css`
        :host {
          display: block;
          padding: 25px 10px;
          color: var(--bd-com-text-color, #000);
        }

        input[type=text] {
          padding:10px;
          border-radius:10px;
          border:1px solid #eee;
          box-shadow:0 0 15px 4px rgba(0,0,0,0.06);
        }
      `;
    }
    // Next, add the event handler that's called when 
    // the input value changes.
    changeName(event) {
        const input = event.target;
        console.log(event.target.value)
        this.name = input.value;
      }
    
    render() {
      // TODO: Add declarative event listener to input.
      return html`
        <div>
          <h2>Reactivity</h3>
          <p>Hello, ${this.name}</p>
          <input @input=${this.changeName} type="text" placeholder="Enter your name">
        </div>
      `;
    }
  }
  customElements.define('name-tag', NameTag);
  