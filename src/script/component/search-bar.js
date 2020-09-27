class SearchBar extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render();
    }

    set clickEvent (event) {
        this._clickEvent = event;
        this.render();
    }

    get namevalue() {
        return this.shadowDOM.querySelector("#searchbyNameElement").value;
    }

    get cityvalue() {
        return this.shadowDOM.querySelector("#searchbyCityElement").value;
    }
    

    render() {
        this.shadowDOM.innerHTML = `
        <style>
        .search-container {
            display: flex;
            flex-direction: column;
            padding: 20px;
            align-items: center;
        }

        .search-container > input {
            margin: 20px;
            width: 60%;
            padding: 10px;
            background-color: rgb(125, 74, 22);
            border-radius: 20px; 
            border: none;
        }

        .search-container > input:focus {
            outline: 0;
            color: white;
        }

        .search-container > input:focus::placeholder {
            color: black;
        }
        
        .search-container >  input::placeholder {
            color: white;
            font-size: medium;
            font-weight: normal;    
        }

        .search-container > button {
            padding: 5px;
            background-color: rgb(224, 219, 174);
            border-radius: 5px;
            font-size: large;
            border: none;
        }

        .search-container > button:focus {
            outline: 0;
        }

        @media screen and (max-width: 1000px) {
            .search-container {
                padding: 7px;
            }
            .search-container > input {
                margin: 10px;
                padding: 7px;
            }
        }

        @media screen and (max-width: 500px) {
            .search-container {
                padding: 5px;
            }
            .search-container > input {
                margin: 7px;
                padding: 5px;
            }
            .search-container >  input::placeholder {
                font-size: small; 
            }
        }
        </style>
        <div class="search-container">
            <input placeholder="Search by reastaurant name" id="searchbyNameElement" type="search">
            <input placeholder="Search restaurant by the city" id="searchbyCityElement" type="search">
            <button id="searchButtonElement" type="submit">Search</button>
        </div>
        `;

        this.shadowDOM.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
    }
}

customElements.define("search-bar", SearchBar);