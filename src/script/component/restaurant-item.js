class RestaurantItem extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }
    
    set restaurant(restaurant) {
        this._restaurant = restaurant;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
            <style>
                .restaurant-item {
                    display: flex;
                    flex-direction: column;
                    padding: 10px;
                    margin: 10px;
                    align-items: center;
                }
                .restaurant-item-container {
                    display: flex;
                    flex-direction: row;
                    padding: 10px;
                    margin: 10px;
                    width: 80%;
                    box-shadow: 3px 2px 2px 2px rgba(15, 15, 15, 0.5);
                    border-radius: 10px;
                }
                .restaurant-item-container>img {
                    width: 250px;
                    max-height: 250px;
                    object-fit: cover;
                    object-position: center;
                }
                .description {
                    flexdirection: column;
                    padding: 0px 10px;
                }
                .description>.name{
                    height: 70%;
                }
                .name>article {
                    padding: 5px 0px;
                }
                .description>.rating {
                    display: flex;
                    flex-direction: row;
                    height: 30%;
                    align-items : center;
                }  
                #rating {
                    flexdirection: column; 
                    padding: 0px 5px;
                }
                #restaurant-name {
                    font-weight: bold;
                    font-size: x-large;
                }

                @media screen and (max-width: 1000px) {
                    .restaurant-item-container{
                        width: 80%;
                        margin: 5px 0px;
                    }
                    .restaurant-item-container>img {
                        width: 200px;
                        max-height: 200px;
                    }
                    #restaurant-name {
                        font-size: medium;
                    }
                    .description {
                        font-size: small;
                    }
                }  

                @media screen and (max-width: 500px) {
                    .restaurant-item-container{
                        width: 90%;
                        margin: 5px 0px;
                    }
                    .restaurant-item-container>img {
                        width: 100px;
                        max-height: 100px;
                    }
                    #restaurant-name {
                        font-size: small;
                    }
                    .description {
                        font-size: xx-small;
                    }
                }        
            </style>
            <div class="restaurant-item" id="${this._restaurant.restaurant.id}">
                <div class="restaurant-item-container">
                    <img src="${this._restaurant.restaurant.thumb}" alt="There is no image of this restaurant">
                    <div class="description">
                        <div class="name">
                            <article id="restaurant-name">${this._restaurant.restaurant.name}</article>
                            <article id="restaurant-address">Address: ${this._restaurant.restaurant.location.address}</article>
                            <article>What you can get: ${this._restaurant.restaurant.cuisines}</article>
                            <article>Open time: ${this._restaurant.restaurant.timings}</article>
                        </div>
                        <div class="rating">
                            <div id="rating">
                                <p>Number of Review: ${this._restaurant.restaurant.all_reviews_count}</p>
                                <p>phone : <br>${this._restaurant.restaurant.phone_numbers}</br></p>
                            </div>
                            <div id="rating">
                                <p>${this._restaurant.restaurant.user_rating.aggregate_rating}</p>
                                <p>Rating: ${this._restaurant.restaurant.user_rating.rating_text}</p>
                            </div>
                        </div>
                    </div>  
                </div>
            </div>
        `;
    }
}

customElements.define("restaurant-item", RestaurantItem);