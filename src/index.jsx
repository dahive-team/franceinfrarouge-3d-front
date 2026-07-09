import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./style.scss";

class Usine3DFirComponent extends HTMLElement {
  constructor() {
    super();
    this.reactRoot = null;
  }

  connectedCallback() {
    this.reactRoot = ReactDOM.createRoot(this);
    this.reactRoot.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
    );
  }

  disconnectedCallback() {
    if (this.reactRoot) {
      this.reactRoot.unmount();
    }
  }
}

// On l'enregistre avec le nom attendu par ton shortcode WP : <usine3d-fir></usine3d-fir>
customElements.define("usine3d-fir", Usine3DFirComponent);
