
# Project Title – (PhilaCrimeMap) Shooting Victims and Crime Incidents in Philadelphia
### Team Members - Jessica Hunt, Andres Aguaiza, Cedric Parages

## Project Description 

https://andresagu.github.io/projectOne/

We are building a geographical color-coded map of Philadelphia using Open Street Maps & Leaflet API where the user can select neighborhoods, triangulate and free-draw areas of the city to show information on crime in the designated areas. The crime information is pulled from OpenDataPhilly using the CartoDB API, there are various datasets but to start we'll be focusing on shooting and crime. Data is continuously updated and includes crime from 2015 until today.


## *BRAINSTORMING*
Feel free to dump any links or notes in the Project Page https://github.com/users/andresagu/projects/1. We don't too much work in order to get the functionality we need so based on research you do make sure to drop notes about what you find:

### *USEFUL LINKS*
* Solid examples of features we want to implement using leaflet
   * https://maptimeboston.github.io/leaflet-intro/
* Useful tool to help us draw our own polygons and get their GeoJSON coordinates
   * https://www.keene.edu/campus/maps/tool/
* Raw data of all philly neighborhoods (shadded and outlined) - we should use and modify this for more simple purposes
   * https://raw.githubusercontent.com/blackmad/neighborhoods/master/gn-philadelphia.geojson
* Pages that may help us figure out how to Query the database for location based queries
   * https://carto.com/blog/nearest-neighbor-joins/
   * https://github.com/CityOfPhiladelphia/carto-api-explorer/issues/4


## Breakdown of Tasks
tasks for project will be broken down into 2 overarching components (front end & back end) and then into subcomponents, shown as here:

### Back End

Open Street Maps (Leaflet API) Integration | 	OpenDataPhilly (CartoDB API) Integration
------------ | -------------
Section map of just Philly | Research formating for the_geom query in order to pull data from ODP db's
Break up map in sections based on neighborhood/or zones and store this geo-location data | Test the_geom query and investigate how to parse results
Overlay color gradient over map based on neighborhood - *Gradient will be based on ODP data to decide how light or dark the color is*| Parse JSON crime data so that it’s easy to adjust our map based on it
Create points of interest based on data from ODP (see if this is possible)  | Create div/headers/etc overlays that we may want to use to display specific data
Leaflet allows for point of interest info that will let us give specific data when clicking on a point of interest | Determine whether we'd like to use the leaflet methods to display data on our page or if we want just custom data overlays
Allow user to free draw for map for selection (possible feature) | Blank


### Critical Step
#### 	Connect Google Maps and OpenDataPhilly (we may need GeoJSON)
* Use neighborhood geo-data to filter results on ODP.
*	Return results and display a gradient on big map
*	Return results for neighborhood specific maps

### Front End
*	Decide on a sleek font for page and data
*	Pick some color schemes for the page and map
*	Display map of Philly on front page
    * Investigate customizing the map colors etc.
*	Investigate map transitions on click of neighborhoods
    * Create click events for neighborhoods on maps if needed and adjust map accordingly 
*	Investigate transitions and animations for data display from OPD data
*	Investigate how to lock google maps functionality for certain scenarios
    * So users can’t zoom in and out on the little map of the neighborhoods
*	Create fancy data display tabs or overlays for the map depending on how much time is available
*	Create an introduction page


