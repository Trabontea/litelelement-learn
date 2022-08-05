import {html, LitElement} from 'lit-element';
import {timeAgo} from './TimeAgo.js';
import './CommentCard.js';

const timeCreated = new Date();

export class TimeAgoExample extends LitElement {
  render() {
    return html`
      <p @click=${this.handleClick}>
        This page was rendered ${timeAgo(timeCreated)}.
      </p>
      <comment-card user="litdeveloper"
                time=${timeAgo(timeCreated)}
                subject="Just tried AsyncDirectives!"
                content="Cool stuff, they're really powerful!">
      </comment-card>
      <hr>
    `;
  }

  handleClick() {
    const parent = this.parentNode;
    this.remove();
    setTimeout(() => parent.appendChild(this), 1000);
  }
}
customElements.define('time-ago-example', TimeAgoExample);