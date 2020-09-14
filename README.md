## TravelEU
This app is to find the shortest way between different cities in European Union if you want to travel them.


Developed with React.js.
External libraries used: Leaflet.js (for visualization of geographic features) and additional library for implementation of dijkstra algorithm.
For this task several files in "data" folder were used as a storage of maps and cities related geographic information.

##Sources:
//https://github.com/isellsoap/deutschlandGeoJSON
//http://www.diva-gis.org/gdata
European country boundaries: https://geojson-maps.ash.ms/
German cities as table: https://www.latlong.net/category/cities-83-15.html
More German cities as JSON: https://simplemaps.com/data/de-cities
https://simplemaps.com/data/fr-cities

## How to use the app
To run the app: "npm start".
The map of European Union with some defined cities will be shown. 
Click on any pointer of the city and click 'Add this city to the trip'.
Repeat with several cities you want to travel.
Click 'Calculate the route' button on the right-side panel.
