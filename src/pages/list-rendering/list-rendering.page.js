import { css, html } from "lit-element";
import {Page} from '../../components/layout/page-layout.js'
import '../../components/loops/simple-loop.js'
import '../../components/loops/array-list.js'
import '../../components/loops/repeat-directive.js'
import '../../components/loops/handling-ev-list.js'
import '../../components/loops/reactive-el.js'
import '../../components/loops/triggering-update.js'

export class ListRendering extends Page {
  static get properties() {
    return {
      eg: {
        type: String,
      },
    };
  }

  render() {
    return html` <div>
      <h1>List Rendering Page</h1>
      <simple-loop></simple-loop>
      <array-list></array-list>
      <repeat-directive></repeat-directive>
      <handling-ev-list></handling-ev-list>
      <reactive-el></reactive-el>
      <triggering-update></triggering-update>
    </div>`;
  }

  
}

customElements.define("list-rendering-page", ListRendering);