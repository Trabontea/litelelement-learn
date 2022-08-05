import {html, css} from 'lit-element';
import { Articol } from '../layout/articol-layout';

class HandlingevList extends Articol {
  static properties = {
    things: {state: true},
  };

  static styles = css`
    li {margin-bottom: 10px}
    button {
      padding: 4px 8px;
      border: none;
      background: #ee9292;
      color: #fff;
    }  
  `

  constructor() {
    super();
    this.things = [
      'Raindrops on roses',
      'Whiskers on kittens',
      'Bright copper kettles',
      'Warm woolen mittens',
    ];
  }

  /* Use immutable data patterns to trigger an update. 
  The filter() array method returns a new array which is assigned to this.things. 
  Since the reference stored in this.things changes, 
  Lit will know to update the component when _deleteThing() is called. 
  If the array is mutated instead with something like the splice() array method, 
  an update must be manually requested. For more information,
  */
  // https://lit.dev/docs/components/properties/#mutating-properties

  _deleteThing(index) {
    this.things = this.things.filter((_, i) => i !== index);
  }

/* While closures are fine for most cases, there are other ways to achieve this behavior.
For instance, you can add a property or attribute to the element that dispatches the event. 
The event handler can then access that data using event.target.
When listening to an event that bubbles, you can use event delegation to avoid attaching 
event listeners on every item.
*/
  render() {
    return html`
      <h2>Handling Event list</h2>
      <h5>handling-ev-list.js</h5>  
      <p>A few of my favorite things</p>
      <ul>
        <!-- Add click event handlers for the delete button  below. map() directive is used in v2.use map() array instead --> 
        ${this.things.map(
          (thing, index) =>  html`
            <li>
              ${thing}
              <button @click=${() => this._deleteThing(index)}>Delete</button>
            </li>
          `
        )}
      </ul>
    `;
  }
}
customElements.define('handling-ev-list', HandlingevList);