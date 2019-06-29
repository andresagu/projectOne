
# Project Title – (PhilaCrimeMap) Shooting Victims and Crime Incidents in Philadelphia
### Team Members - Jessica Hunt, Andres Aguaiza, Cedric Parages

## Project Description 

We are building a geographical color-coded map of Philadelphia using Google Maps API where the user can select neighborhoods, triangulate and free-draw areas of the city to show overlay information on crime in the designated areas. The crime information is pulled from two different APIs that are publicly listed under OpenDataPhilly and include a Shooting Victims API separated under Homocide, Robbery, Weapons Offence and Aggravated Assault, as well as a Crimes Incident API which includes all other crimes. Both of these APIs are continuously updated and include crime from 2015 until today.

Along with the map, the site will have a page with general statistics with charts and diagrams for the user to see the data from a larger scope of the entire city. The API documentation for the both Shooting Victims and Crime Incidents Data are provided on the City of Philadelphia github, and a contact page is provided in case we need additional help or documentation to facilitate building the site. 

## *BRAINSTORMING*
Feel free to dump any links or notes in the Project Page https://github.com/users/andresagu/projects/1. We don't too much work in order to get the functionality we need so based on research you do make sure to drop notes about what you find 


## Breakdown of Tasks
tasks for project will be broken down into 2 overarching components (front end & back end) and then into subcomponents, shown as here:

### Back End

Google Maps API integration | 	OpenDataPhilly Integration
------------ | -------------
Section map of just Philly  | Figure out GET requests and what JSON shooting/crime data will be formatted
Break up map in sections based on neighborhood and store this geo-location data | Investigate how to return data based on geo-location data sent to API
Overlay color gradient over map based on neighborhood - *Gradient will be based on ODP data to decide how light or dark the color is*| Parse JSON crime data so that it’s easy to feed into google maps overlay
Create points of interest based on data from ODP (see if this is possible)  | Blank
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


