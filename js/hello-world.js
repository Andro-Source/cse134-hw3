// Custom element #2: logs a greeting to the console without touching the DOM.
class HelloWorld extends HTMLElement {
  connectedCallback() {
    console.log('Hello World!');
  }
}

customElements.define('hello-world', HelloWorld);
