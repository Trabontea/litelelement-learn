import { html} from 'lit-element';
// import {map} from 'lit/directives/map.js';
// import repeat directive.
import { repeat } from 'lit-html/directives/repeat.js';
import {Articol} from '../../components/layout/articol-layout.js'

class RepeatDirective extends Articol {
  static properties = {
    tasks: {state: true},
  };

  constructor() {
    super();
    this.tasks = [
      {id: 'a', label: 'Learn Lit'},
      {id: 'b', label: 'Feed the cat'},
      {id: 'c', label: 'Go for a walk'},
      {id: 'd', label: 'Take a nap'},
    ];
  }

  //Use the repeat() directive to keep the list item and checkbox tied 
  //to the specific item of the array. Using this directive with a key function 
  //lets Lit maintain the key-to-DOM association between updates by moving 
  //the DOM nodes when required.



  render() {
    console.log(this.tasks)
    return html`
      <h2>Repeat Directive</h2>
      <h5>repeat-directives.js</h5>  
      <p>Things to do today:</p>
      <corp-button @click=${() => this._sort(1)}>Sort ascending</corp-button>
      <corp-button @click=${() => this._sort(-1)}>Sort descending</corp-button>
      <ul>
        ${repeat(
          this.tasks,
          (task) => task.id,
          (task) => html`
            <li>
              <label><input type="checkbox" />(${task.id}) ${task.label} </label>
            </li>
          `
        )}
      </ul>
    `;
  }
// Sort function
  _sort(dir) {
    this.tasks.sort((a, b) => a.label.localeCompare(b.label) * dir);
    this.requestUpdate();
  }
}
customElements.define('repeat-directive', RepeatDirective);
