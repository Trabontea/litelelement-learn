import {html, css} from 'lit-element';
import {Articol} from '../../components/layout/articol-layout.js'

class ArrayList extends Articol {
  static properties = {
    names: {state: true},
    friends: {state: true},
    pets: {state: true},
    includePets: {state: true},
  };

  static styles = css`
    .down {
      display:  inline-block;
      margin-bottom: 10px;
    }
  `

  constructor() {
    super();
    this.names = ['Chandler', 'Phoebe', 'Joey', 'Monica', 'Rachel', 'Ross'];
    this.friends = ['Harry', 'Ron', 'Hermione'];
    this.pets = [
      {name: 'Hedwig', species: 'Owl'},
      {name: 'Scabbers', species: 'Rat'},
      {name: 'Crookshanks', species: 'Cat'},
    ];
    this.includePets = true;
  }

  _togglePetVisibility() {
    this.includePets = !this.includePets;
  }

  render() {
    const listItems = [];
    this.friends.forEach((friend) => {
      listItems.push(html`<li>${friend}</li>`);
    });
    if (this.includePets) {
      this.pets.forEach((pet) => {
        listItems.push(html`<li>${pet.name} (${pet.species})</li>`);
      });
    }

    return html`
      <div class="arrayList">
        <h2>Array Loop</h2>
        <h5>array-list.js</h4>
        <p>A list of names that include the letter "e"</p>
        <ul>
          ${this.names
            .filter((name) => name.match(/e/i))
            .map((name) => html`<li>${name}</li>`)}
        </ul>
      </div>
     
      <div>
        <div>
          <p>My magical friends</p>
          <i class="down">Click the button to see if the conditional rendering is working properly.</i>
        </div>
        <corp-advanced-button @click=${() => this._togglePetVisibility()}>
          ${this.includePets ? 'Hide' : 'Show'} pets
          </corp-advanced-button>
        <ul>
          ${listItems}
        </ul>
      </div> 
    `;
  }
  // runs each time the element is added to the DOM
  // hmm de ce nu se mai incarca elementul????? 
  // connectedCallback() {
  //   console.log('Hello ConnectedCallback')
  // }

  // disconnectedCallback() {
  //   console.log('Hello DisconnectedCallback');
  // }
  
  // adoptedCallback() {
  //   console.log('Custom square element moved to new page.');
  // }
}
customElements.define('array-list', ArrayList);
