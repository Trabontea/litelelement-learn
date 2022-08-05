import {html} from 'lit-element';
import {Articol} from '../../components/layout/articol-layout.js'

export class ReactiveEl extends Articol {
    //To make it a reactive property, 
    //add the following code to the beginning of the class.
 
    static properties = {
        result: {},
    };

  constructor() {
    super();
    this.result = '';
  }

  flipCoin() {
    if (Math.random() < 0.5) {
      this.result = 'Heads';
    } else {
      this.result = 'Tails';
    }
  }

  render() {
    return html`
      <div>
        <h2>Reactive Element</h2>
        <h5>reactive-el.js</h4>
        <p>A reactive property is a property that triggers the component to update whenever the property's value changes.</p>
      
      <corp-button @click=${this.flipCoin}>Flip a coin!</corp-button>
      <p>Result: ${this.result}</p>
      </div>
    `;
  }
}
customElements.define('reactive-el', ReactiveEl);
