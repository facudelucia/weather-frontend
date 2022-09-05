Demo of app allocated in https://benevolent-sunflower-a00330.netlify.app/

To run local:

- Clone repo
- Inside app folder run: 'npm install'
- To run: 'npm start', app should be up in port 3000
- To run tests: 'npm test'

To get current location:
- The app is using the api 'https://ipapi.co/json'

To get current weather:
- If there is searching text:
- The app is using the api 'https://api.openweathermap.org/data/2.5/weather' with the query {city}
- If there isn't searching text:
- The app is using the api 'http://ip-api.com/json' to get {lat} and {lon} and then using 'https://api.openweathermap.org/data/2.5/weather' with those params


To get current forecast:
- If there is searching text:
- The app is using the api 'https://api.openweathermap.org/data/2.5/forecast' with the query {city}
- If there isn't searching text:
- The app is using the api 'http://ip-api.com/json' to get {lat} and {lon} and then using 'https://api.openweathermap.org/data/2.5/forecast' with those params
