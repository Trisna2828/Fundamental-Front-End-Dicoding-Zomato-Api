import "../component/restaurant-list.js"
import "../component/search-bar.js"
import DataSource from "../data/data-source.js"

const main = () => {
    const searchElement = document.querySelector("search-bar");
    const restaurantListElement = document.querySelector("restaurant-list");

    const onButtonSearchClicked = async() => {
        try {
            const cityId = await DataSource.searchCityId(searchElement.cityvalue);
            const result = await DataSource.searchRestaurant(searchElement.namevalue, cityId[0].id);
            renderResult(result);
        } catch(message) {
            fallbackResult(message);
        }
        
    };

    const renderResult = (results) => {
        restaurantListElement.restaurants = results;
    };

    const fallbackResult = message => {
        restaurantListElement.renderError(message);
    };

    searchElement.clickEvent = onButtonSearchClicked;
};

export default main;