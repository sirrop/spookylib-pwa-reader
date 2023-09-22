export default class ApplicationHeader extends HTMLElement {
    constructor() {
        super();

        this.title = "SpookyLib"

        this.init();
    }

    init() {
        const shadow = this.attachShadow({ mode: 'open' })

        const h1 = document.createElement('h1')
        h1.innerText = this.title

        shadow.appendChild(h1)
    }

    repaint() {

    }
}
