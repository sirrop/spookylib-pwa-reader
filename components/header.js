export default class ApplicationHeader extends HTMLDivElement {
    constructor() {
        super();

        this.title = "SpookyLib"

        this.init();
    }

    init() {
        const h1 = document.createElement('h1')
        h1.innerText = this.title
        this.h1 = h1
        this.appendChild(h1)
    }

    repaint() {

    }
}
