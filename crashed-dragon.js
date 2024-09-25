"use strict";

class CrashedDragon extends HTMLElement {

    constructor(props = {}) {
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });
        const width = this.getAttribute("width")
        const height = this.getAttribute("height")
        const content = `
        <img src="./crashed-dragon.svg" width="${width}" height="${height}"/>
        `;
        shadowRoot.innerHTML = content;
    }
}
