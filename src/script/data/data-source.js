// user-key diperoleh dari personal request akun Zomato Developer 

class DataSource {
    // searchCityId digunakan untuk mendapatkan id kota dari nama kota yang dimasukkan pada element input oleh user, searchcityId mengembalikan nilai Promise berupa JSON City dari Zomato API bila berhasil yang kemudian akan digunakan sebagai parameter searchRestaurant
    static searchCityId(cityname) {
        return fetch(`https://developers.zomato.com/api/v2.1/cities?q=${cityname}&count=1`, {
                method: "GET",
                headers: {
                    "Accept": "application/json",
                    "user-key": "937419c7454f56307cb44e90ace91f52"
            }
        })
        .then(response => {
            return response.json();
        })
        .then(responseJson => {
            if(responseJson.location_suggestions.length !== 0) {
                return Promise.resolve(responseJson.location_suggestions);
            } else {
                return Promise.reject(`City named "${cityname}" was not found in Zomato Database, try use the right city name or another city name. Please remember that the Zomato database is limited to big cities, not all cities are available in the Zomato database.`);
            }
        })

    }

    // searchRestaurant menerima parameter name: yaitu nilai input element id name dan parameter cityId yang merupakan properti id city di dalam JSON hasil dari searchcityId
    static searchRestaurant(name, cityId) {

        return fetch(`https://developers.zomato.com/api/v2.1/search?entity_id=${cityId}&entity_type=city&q=${name}&count=15&sort=rating&order=desc`, {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "user-key": "937419c7454f56307cb44e90ace91f52"
            }
        })
        .then(resolve => {
            return resolve.json();
        })
        .then(responseJson => {
            if(responseJson.restaurants.length !== 0) {
                return Promise.resolve(responseJson.restaurants);
            } else {
                return Promise.reject(`Can't find restaurant "${name}" in the city you'are searching, try find another restaurant name, or just try searching using city name if you don't know any restaurant names in the city you are searching`);
            }
        })
    } 
};

export default DataSource;