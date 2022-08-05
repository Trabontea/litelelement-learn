import {html, css} from 'lit-element';
import { Articol } from '../layout/articol-layout';

export class TriggeringUpdate  extends Articol {
  static properties = {
    groceries: {},
  };

  static styles = css`
    .container {
      width: 100%;
      max-width: 880px;
    }
    p {
      line-height: 1.3;
    }

    li {
      display: flex;
      align-items: center;
      list-style: none;
      margin-bottom: 5px;
    }
    li button {
      margin-right: 10px;
    }

    button {
      padding: 4px 8px;
      border: none;
      background: #bf06a3;
      color: #fff;
    }  
  `

  constructor() {
    super();
    this.groceries = ['tea', 'milk', 'honey', 'chocolate'];
  }

  /* By default, Lit uses a strict inequality check (!==) to determine whether a property has changed.
   If you mutate an existing object or array, Lit won't detect a change. 
   Try clicking the "x" button next to one of the list items in the preview pane. 
   You'll notice the list doesn't update.
   */
  removeItem(item) {
    const indexToRemove = this.groceries.indexOf(item);

    //old: code this.groceries.splice(indexToRemove, 1);

    //To use this approach in the current component, 
    //replace the existing splice() call with the following cod
    // filter return a new array

    /*
    This creates a new array containing all of the members from the first array, 
    except for the one you want to remove. Since groceries is now a new array,
    the change triggers an update.
    */
    this.groceries =
    this.groceries.filter((_, i) => i !== indexToRemove);
  }

  render() {
    return html`
      <h2>Triggering update</h2>
      <h5>triggerin-update.js</h5>
      <div class="container">
        <p>How does a reactive property work? When you add a reactive property,
              Lit adds accessors for that property. When you set the property, 
              Lit checks to see if the property has changed. 
              If the property has changed, Lit starts an update cycle. 
              The update cycle is asynchronous, so that updating several properties in the course of a 
              single event handler, for example, only triggers a single update</p>

          <p>Lit's default equality check works great when using <b>immutable data patterns</b>. For example:</p> 
          <pre>
              <code>
              this.array = [...this.array, newThing]
              this.obj = {...this.obj, id: ++this.obj.id} 
              </code>
          </pre>   
      </div>
       <ul>
        ${this.groceries.map(
          (item) => html` <li>
            <button @click=${() =>this.removeItem(item)}>x</button> 
            <span> ${item} </span>
          </li>`
        )}
       </ul>
    `;
  }
}
customElements.define('triggering-update', TriggeringUpdate);