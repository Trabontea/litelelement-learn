import {  css, html } from "lit-element";
import {Page} from '../../components/layout/page-layout.js'
import '../../components/async/time-ago-example.js'

class Async extends Page {
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
  render() {
    return html` <div>
      <h1>This is Async Page</h1>
      <time-ago-example></time-ago-example>
      
    </div>`;
  }
  
}
customElements.define("async-page", Async);