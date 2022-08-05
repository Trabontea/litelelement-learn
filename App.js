import { LitElement, html } from 'lit-element';
import { router } from 'lit-element-router';
import  { AppStyles } from './AppStyles.js'

//Components
import "./src/components/layout/nav-link.component.js";
import "./src/components/layout/header.component.js";
import "./router-outlet";

// Pages
import "./src/pages/home/home.page.js";
import "./src/pages/list-rendering/list-rendering.page.js";
import "./src/pages/async/async.page.js";


export class App extends router(LitElement) {
  static get properties() {
    return {
      route: { type: String },
      params: { type: Object },
      query: { type: Object },
    };
  }

  static get routes() {
    return [
      {
        name: "home",
        pattern: "",
        data: { title: "Home" },
      },
      {
        name: "async",
        pattern: "async",
      },
      {
        name: "list-rendering",
        pattern: "list-rendering",
      },
      {
        name: "not-found",
        pattern: "*",
      },
    ];
  }

  static styles = AppStyles;

  constructor() {
    super();
    this.route = "";
    this.params = {};
    this.query = {};
  }

  router(route, params, query, data) {
    this.route = route;
    this.params = params;
    this.query = query;
    console.log('router', route, params, query, data);
  }

  render() {
    return html`
      <header>
        <span>Lit Element</span>  
        <div class="nav-container">
          <nav-link href="/">Home</nav-link>
          <nav-link href="/list-rendering">List rendering</nav-link>
          <nav-link href="/async">Async</nav-link>
        </div>
      </header>

      <router-outlet active-route=${this.route}>
        <home-page route="home"></home-page>
        <async-page route="async"></async-page>
        <list-rendering-page route="list-rendering"></list-rendering-page>
        <h1 route="not-found">Not Found</h1>
      </router-outlet>
    `;
  }
}

customElements.define("app-container", App);