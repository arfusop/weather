# Just Another Weather App

This really is just another typical weather application. A right of passage for all front-end developers. My focus here was to use Google Places & Sky Weather API's to get the data needed, use styled and reusable components to build out the view, and put a heavy emphasis on responsive and elegant design. The user can search for any location in the world to see their current weather and daily forecasts for the next 7 days. There is also a feature that displays 3 random cities from around the world and their current weather at the given time.

## Getting Started

To get started, clone this repo down. Then run yarn add/npm install to install all of the dependencies. Then you can run yarn start/npm run start to see the app run in development.

## Deployment

I am using netlify to deploy this site. When you think you're done and ready to push live, run yarn build. Let the build process finish up, then push all of your changes up to your remote git master. Ensure that your local build/dist file has been updated. Confirm your connection to netlify or whoever you are using to deploy is up and running, and the deployment should begin once remote git master gets the changes.

## Built With

- [Google Places](https://developers.google.com/places/web-service/autocomplete?utm_source=google&utm_medium=cpc&utm_campaign=FY18-Q2-global-demandgen-paidsearchonnetworkhouseads-cs-maps_contactsal_saf&utm_content=text-ad-none-none-DEV_c-CRE_315916117628-ADGP_Hybrid+%7C+AW+SEM+%7C+BKWS+~+Google+Maps+Place+Autocomplete-KWID_43700039136946147-kwd-532573556781-userloc_9003471&utm_term=KW_google%20place%20autocomplete-ST_google+place+autocomplete&gclid=CIm5gLuB9-ICFYaVswodvCQNKw) - The location/coordinate API used to provide data to pinpoint weather
- [Dark Sky](https://darksky.net/dev) - Weather API
- [Emotion Styled Components](https://emotion.sh/docs/introduction) - Styled components library

## Author

- **Phil Arfuso**

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

- Thanks to the devs who built Dark Sky, a truly awesome API to use
