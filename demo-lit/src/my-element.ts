import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators'
import { track, identify, init } from '../../src'

init({ writeKey: 'dHuUTYnzLb4bTV2JwQDH' })

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('my-element')
export class MyElement extends LitElement {
  /**
   * Copy for the read the docs hint.
   */
  @property()
  response = ''

  private showResponse = (promise: Promise<any>) => {
    promise.then((d) => {
      this.response = JSON.stringify(d)
    }).catch(e => {
      this.response = JSON.stringify(e)
    })
  }
  private _login() {
    this.showResponse(identify('12091906-01011992', {
      traits_firstName: 'Grace Hopper',
      traits_username: 'grace@usnavy.gov'
    }))
  }
  private _track() {
    this.showResponse(track('salam', {}))
  }

  render() {
    return html`
      <div>
        <a href="https://smartech.ir/deepin" target="_blank">
          DeepIn
        </a>
      </div>
      <slot></slot>
      <div class="card">
        <button @click=${this._login} part="button">
          Login
        </button>
        <button @click=${this._track} part="button">
          Track
        </button>
      </div>
      <p class="read-the-docs">${this.docsHint}</p>
    `
  }  
  
  
  
  static styles = css`
    :host {
      max-width: 1280px;
      margin: 0 auto;
      padding: 2rem;
      text-align: center;
    }

    .logo {
      height: 6em;
      padding: 1.5em;
      will-change: filter;
    }
    .logo:hover {
      filter: drop-shadow(0 0 2em #646cffaa);
    }
    .logo.lit:hover {
      filter: drop-shadow(0 0 2em #325cffaa);
    }

    .card {
      padding: 2em;
    }

    .read-the-docs {
      color: #888;
    }

    h1 {
      font-size: 3.2em;
      line-height: 1.1;
    }

    a {
      font-weight: 500;
      color: #646cff;
      text-decoration: inherit;
    }
    a:hover {
      color: #535bf2;
    }

    button {
      border-radius: 8px;
      border: 1px solid transparent;
      padding: 0.6em 1.2em;
      font-size: 1em;
      font-weight: 500;
      font-family: inherit;
      background-color: #1a1a1a;
      cursor: pointer;
      transition: border-color 0.25s;
    }
    button:hover {
      border-color: #646cff;
    }
    button:focus,
    button:focus-visible {
      outline: 4px auto -webkit-focus-ring-color;
    }

    @media (prefers-color-scheme: light) {
      a:hover {
        color: #747bff;
      }
      button {
        background-color: #f9f9f9;
      }
    }
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyElement
  }
}
