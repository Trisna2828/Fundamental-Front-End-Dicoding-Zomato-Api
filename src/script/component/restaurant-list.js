import "./search-bar.js"
import "./restaurant-item.js"

class RestaurantList extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }
    
    set restaurants(restaurants) {
        this._restaurants = restaurants;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = "";
        const resultIntro = document.querySelector("search-bar");

        if (resultIntro.namevalue === "") {
            this.shadowDOM.innerHTML = `
            <style>
            .resultIntro {
                text-align: center;
                margin: 5px;
            }
            </style>
            <h2 class="resultIntro">Here the results of restaurants in "${resultIntro.cityvalue}" city.</h2>`;
        } else {
            this.shadowDOM.innerHTML += `
            <style>
            .resultIntro {
                text-align: center;
                margin: 5px;
            }
            </style>
            <h2 class="resultIntro">Here the results of restaurants with "${resultIntro.namevalue}" in "${resultIntro.cityvalue}" city.</h2>`;
        };

        this._restaurants.forEach(restaurant => {
            const restaurantItemElement = document.createElement("restaurant-item");
            restaurantItemElement.restaurant = restaurant
            this.shadowDOM.appendChild(restaurantItemElement);
        });
    }

    renderError(message) {
        this.shadowDOM.innerHTML = `
        <style>
        :host {
            align-items: center;
        }
        .resultholder {
            font-weight: lighter;
            color: rgba(0,0,0,0.5);
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            text-align: center;
        }
        </style>
        `;
        this.shadowDOM.innerHTML += `<h2 class="resultholder">${message}</h2>`
    }
}

customElements.define("restaurant-list", RestaurantList);