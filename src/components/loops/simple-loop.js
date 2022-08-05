import {html} from 'lit-element';
import {Articol} from '../../components/layout/articol-layout.js'

class SimpleLoop extends Articol {
  render() {
    return html`
      <h2>Simple Rendering lists with Lit</h1>
      <p>Lit has built-in support for any iterables!</p>
      <h4>Array</h2>
      <p>
        ${['✨', '🔥', '❤️']}
      </p>
      <h4>Set</h2>
      <p>
        ${new Set(['A', 'B', 'C'])}
      </p>
      <h4>Generator</h2>
      <p>
        ${(function* () {
          for (let i = 1; i < 4; i++) yield i;
        })()}
      </p>
    `;
  }
}
customElements.define('simple-loop', SimpleLoop);
