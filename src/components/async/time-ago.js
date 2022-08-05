import {format} from 'timeago.js';
import { asyncAppend } from 'lit-html/directives/async-append.js';



class TimeAgoDirective extends asyncAppend  {
    timer;

    render(time) {
      return format(time);
    }

    // It is possible for a template to be re-rendered after it has been disconnected. 
		// In this case update will still be called, so you should 
		// always check isConnected before doing work that might require cleanup.

  update(part, [time]) {
		this.time = time;
    if (this.isConnected) {
      this.ensureTimerStarted();
    }
    return this.render(time);
  }

  ensureTimerStarted() {
		console.log('timer started');
    if (this.timer === undefined) {
      this.timer = setInterval(() => {
				this.setValue(this.render(this.time));
      }, 1000);
    }
  }
	ensureTimerStopped() {
		console.log('timer stopped');
    clearInterval(this.timer);
    this.timer = undefined;
  }
	disconnected() {
    this.ensureTimerStopped();
  }

	//Always implement reconnected after implementing disconnected. 
	// As a rule of thumb, if you implement disconnected to stop some async work, 
	// you should always implement reconnected to put the directive back into a working state.

  reconnected() {
    this.ensureTimerStarted();
  }
}

export const timeAgo = directive(TimeAgoDirective);


/* The AsyncDirective base class adds a few new methods useful for directives 
that need to do asynchronous rendering:

setValue() - Can be called from an async task or event callback outside
of the template's update cycle, in order to render a new value asynchronously.

disconnected() - Async directives typically need to subscribe to some
 sort of asynchronous source (awaiting a promise, registering a callback, listening to a DOM event, etc.). This callback allows the directive to unsubscribe and perform any clean up work if its DOM was removed. Without this, directives could leak memory.
reconnected() - Like disconnected(), it is also possible that a 
directive that was removed is subsequently re-connected to the DOM. Thus, 
async directives should always implement a reconnected callback to become 
operational again after having been disconnected.
*/
customElements.define('time-ago', TimeAgoDirective);