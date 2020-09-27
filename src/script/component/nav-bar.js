class NavBar extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"})
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
      
        nav {
            position: sticky;
            top: 0;
        }
        nav ul {
            list-style-type: none;
            overflow: hidden;
            background-color: rgb(15, 15, 15);
            
        }
          
        li {
            float: left;
        }
          
        li a {
            display: block;
            color: white;
            text-align: center;
            padding: 10px 15px;
            text-decoration: none;
        }
          
        li a:hover {
            background-color: rgb(255, 180, 18);
        }  
        
        </style>
        <nav>
            <ul>
                <li><a href="#searchIntro">Start Searching</a></li>

            </ul>
        <nav>
        `;
    }
}

customElements.define("nav-bar", NavBar);