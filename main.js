const axios = require('axios').default;

// Make a request for a user with a given ID
axios.get('https://api.open-meteo.com/v1/forecast?latitude=43.70&longitude=7.27&hourly=temperature_2m&timezone=Europe%2FLondon')
    .then(function (response) {
        // handle success
        console.log(response.data);
        let data = response.data
        let temp = data["elevation"];
        let lat = data["latitude"];
        let long = data["longitude"]
        console.log(`Longitude: ${long}, Latitude: ${lat}, Temperature: ${temp}`);
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .then(function () {
        // always executed
    }
);

axios.post('/post', {

})
    .then()
