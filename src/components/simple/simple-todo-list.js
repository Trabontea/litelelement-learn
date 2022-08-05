import {LitElement, html} from 'lit-element';
import { toDoStyle } from './SimpleTodoList.js';
import '../button/corp-advanced-button.js'


export class SimpleTodoList extends LitElement {
  static properties = {
    // _listItems property is defined as internal reactive state. It works just like 
    // a reactive property, but it isn't exposed as an attribute, and shouldn't 
    // be accessed from outside the component.
    _listItems: {state: true},
    hideCompleted: {}
  };

  // Style imported from another file
  static styles = toDoStyle;

  constructor() {
    super();
    this._listItems = [
      {text: 'Start Lit tutorial', completed: true},
      {text: 'Make to-do list', completed: true},
    ];
    this.hideCompleted = false;
  }

  // RENDER 
  render() {
    const items = this.hideCompleted
    ? this._listItems.filter((item) => !item.completed)
    : this._listItems;

    // Partial template
    const todos = html`
      <ul>
      <!-- You can use standard JavaScript in
       Lit expressions to create conditional or repeating templates -->
       ${items.map(
          (item) => html`
            <li
            class=${item.completed ? 'completed' : ''}
                @click=${() => this.toggleCompleted(item)}>
              ${item.text}
            </li>`
        )}
      </ul>
    `;

    const caughtUpMessage = html`
        <p>
            You're all caught up!
        </p>
    `;
    const todosOrMessage = items.length > 0 ? todos: caughtUpMessage;

    return html`
        <h2>To Do List</h2>
        ${todosOrMessage}
        <input id="newitem" aria-label="New item">
        <corp-advanced-button @click=${this.addToDo}>ADD</corp-advanced-button>
        <br>
        <label>
            <input type="checkbox"
                @change=${this.setHideCompleted}
                ?checked=${this.hideCompleted}>
            Hide completed
            </label>   
        `;
    }

  toggleCompleted(item) {
    item.completed = !item.completed;
    this.requestUpdate();
  }

  setHideCompleted(e) {
    this.hideCompleted = e.target.checked;
  }

  // We've provided an input and an Add button, but they aren't hooked up yet.
   // Add the input property and an event handler method for the button:
   //Nullish Coalescing Operator ??
   //Optional Chaining ? - it will just return undefined instead of throwing an ugly error.

   get input() {
    // return this.renderRoot?.querySelector('#newitem') ?? null;
    return this.renderRoot.querySelector('#newitem');
   }

  // TODO: Add click handler.
  /* Note that instead of mutating the _listItems array, 
  addToDo() creates a new array that includes the new item. 
  Using this immutable data pattern ensures that the components see the new data. 
  For more information see mutating-properties*/
  addToDo() {
    if(this.input.value) {
      this._listItems = [...this._listItems,
        {text: this.input.value, completed: false}]; 
    }
    this.input.value = '';
  }
}

customElements.define('simple-todo-list', SimpleTodoList);

// TODO change the status complete