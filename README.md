# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
App was created with node v14.19.0
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

### `APIS`
OpenWeather API https://openweathermap.org/:\
I used this API to fetch the weather data. With the free account I could fetch the current weather and the forecast.

Algolia Places API https://community.algolia.com/places/:\
I used this API in my search input to use autocomplete for places/cities.

All API calls are located in /src/lib

### `STYLING`
App was created with tailwindCSS. I think it's a super smart way to build mobile first application as it is easy to customize and nice to maintain because of the usage of classes. The app is mobile first and I used some microanimations on the weathericons because I think that microanimation are nice addons for the user experience.

### `APP`
The app was build to show the current weather and the weather forecast for every city in the world. You can search a city with a search string or you can use the location icon to get your current location as coordinates. For this feature I used the Geolocation API https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API it only works if you allow your browser to get your current location. During the process of bulding the app I discovered a lot of ways to simplify my code at first I fetched the data in different ways and now I tried to change my code as simple as possible so that different props can be used with the fetch requests. Changing the fetchrequest to use both the searchTerm (string) and the coordinates of the geolocation (object) was a nice learning and helped to imporve my code. I am more than happy with the final solution and I think there are always parts I could improve or simplify but for now I think it is a nice and smooth weather app which is easy to use and to understand.
### `LINKS`
Link to repository: https://github.com/KimZarah/react-weather-app\
Link to App: https://react-weather-app-sepia-six.vercel.app/

