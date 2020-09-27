class AppBar extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
            *{
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            :host {
                display: block;
                width: 100%;
                color: rgb(15, 15, 15);
                background-color: rgb(245, 209, 1);    
            }
                
            .jumbotron {
                font-size: 20px;
                padding: 40px 15px;
                color: white;
            }
               
        </style>
        <div class="jumbotron">
            <h1>TablEat</h1>
            <p>Discover your table before Grab a bite</p>
        </div>
        
        `;
    }
}

customElements.define("app-bar", AppBar);