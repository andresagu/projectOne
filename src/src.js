
    // Set up PostGIS SQL Query for "center city"
    //SELECT columns in table FROM shootings WHERE ST_WITHIN(SHAPE 1,SHAPE 2);
    var center_city_query ="SELECT location, race, fatal, age FROM shootings WHERE ST_WITHIN(the_geom,ST_GeomFromText('MULTIPOLYGON(((-75.1815463  39.9601819, -75.1808693 39.9595842, -75.1799365 39.9569909, -75.1808693 39.9543851, -75.1824149 39.9506994, -75.1869656 39.9466186, -75.1849049 39.9457629, -75.1604748 39.9430415, -75.1482868 39.9414128, -75.136335 39.9401953, -75.1358845 39.9467101, -75.1343775 39.9525632, -75.1398727 39.9536162, -75.1477287 39.9548855, -75.1500893 39.9568267, -75.1603459 39.9576162, -75.1815463 39.9601819 )))',4326))"

    var north_west_query ="SELECT location, race, fatal, age FROM shootings WHERE ST_WITHIN(the_geom,ST_GeomFromText('MULTIPOLYGON(((-75.2060876 40.0117325, -75.2065456 40.0129709, -75.196928 40.008242, -75.1838756 40.0092929, -75.1632664 40.019801, -75.1449868 40.0194377, -75.1297564 40.0243149, -75.1107788 40.028859, -75.1130096 40.0365764, -75.1144164 40.0405433, -75.1106701 40.0448921, -75.1122425 40.0470301, -75.1763713 40.0846252, -75.1883808 40.0726997, -75.2236476 40.0930467, -75.2524305 40.0645917,-75.2564391 40.0610678, -75.2646828 40.0543403, -75.263262 40.0529291, -75.2592729 40.0489101, -75.2522392 40.0441717, -75.2483182 40.0414147, -75.2460135 40.0380125, -75.2425591 40.0359892, -75.2397435 40.0330518, -75.2361071 40.0310648, -75.2312983 40.0276833, -75.2223676 40.0227584, -75.2200062 40.0221017, -75.2180632 40.0210007, -75.2154436 40.0186887, -75.213252540.0162962, -75.2097823 40.0139879, -75.2060876  40.0117325)))',4326))"

    var north_philly_query = "SELECT location, race, fatal, age  FROM shootings WHERE ST_WITHIN(the_geom,ST_GeomFromText('MULTIPOLYGON(((-75.125295 39.9617259,-75.1287813 39.966875, -75.1341434 39.9643581,-75.134487 39.9725832,-75.1331262 39.9742839,-75.134243 39.9749419,-75.1318864 39.9862941,-75.125489 39.9898668,-75.1261122 39.9902697,-75.1270893 39.9903355,-75.123569 40.0072153,-75.117509 40.0157203,-75.1057148 40.0188713,-75.1026678 40.020942,-75.105114 40.0232114,-75.1091909 40.0222552,-75.1103497 40.0239336,-75.110693 40.0269248,-75.1182461 40.0268262,-75.1278164 40.0251829,-75.1380292 40.0221916,-75.1442524 40.0196107,-75.1568108 40.0204983,-75.1594739 40.0233829,-75.1597316 40.0239089,-75.161548 40.0228904,-75.1625233 40.021772,-75.1629527 40.0202365,-75.1633176 40.0193409,-75.1644338 40.019037,-75.1684678 40.0183879,-75.1724111 40.0174464,-75.1751599 40.0164107,-75.1787677 40.0141422,-75.1817742 40.0120051,-75.1839592 40.0108365,-75.1886462 40.0091445,-75.1935747 40.0065387,-75.1921144 40.0060125,-75.1911695 40.0023625,-75.1922102 39.9985255,-75.1943478 39.9949961,-75.19831 39.9909344, -75.2038453 39.9856191,-75.2036735 39.9807509,-75.1942245 39.9761455,-75.1918999 39.9719649,-75.1906875 39.9698188,-75.1886262 39.9686597,-75.1832293 39.9646966,-75.1799705 39.9600354,-75.1707792 39.9588179,-75.1545011 39.9568683,-75.1503676 39.9569583,-75.1490056 39.9562919,-75.1477169 39.9550821,-75.1395437 39.9537339,-75.1342609 39.9527467,-75.1334277 39.9550664,-75.1318557 39.9575593,-75.1289429 39.9597623,-75.1254561 39.9619027,-75.125295 39.9617259)))',4326))"

    var south_phila_query ="SELECT location, race, fatal, age  FROM shootings WHERE ST_WITHIN(the_geom,ST_GeomFromText('MULTIPOLYGON((( -75.1868504 39.9467924, -75.1893407 39.9448183, -75.192518 39.9421862, -75.1950084 39.9418571, -75.1980998 39.9429758, -75.199989 39.9435681, -75.2024794 39.9436997, -75.2051414 39.9418571, -75.2051414 39.9373822, -75.2062578 39.9340916, -75.2084046 39.9323146, -75.2113243 39.9283656, -75.2122689 39.924153, -75.2104656 39.9213226, -75.2075482 39.920796, -75.2038565 39.9209934,-75.2017102 39.9196769, -75.2027404 39.916188, -75.2068614 39.9108555, -75.2137296 39.9103288, -75.2157042 39.9076294, -75.2147598 39.9023621, -75.2110681 39.8969627,-75.2032556 39.8939335, -75.1950996 39.8907726, -75.1941552 39.8832647, -75.1932108 39.8789176, -75.1888324 39.8805643, -75.1825651 39.8818815, -75.1711468 39.8824084, -75.1557792 39.8829354, -75.1473656 39.883594, -75.1438457 39.8845819, -75.1398106 39.8880725, -75.1360331 39.8914311, -75.133801 39.8951847, -75.1304527 39.9005843, -75.1284781 39.9099996, -75.128564 39.9142788, -75.1310537 39.9190186, -75.1344019 39.925996, -75.1354123 39.9296819, -75.1359473 39.9340916, -75.1362048 39.9398829, -75.1362048 39.9411333, -75.1840246 39.9470556, -75.1841963 39.9457396, -75.1853983 39.9460028, -75.1868578 39.9468582, -75.1868504 39.9467924)))',4326))"


    var centerCityCount;
    var northWestCount;
    var northPhillyCount;
    var southPhillyCount;

    var centerCityData;
    var northWestData;
    var northPhillyData;
    var southPhillyData;

    var centerCityCode =0;
    var northWestCode=1;
    var northPhillyCode=2;
    var southPhillyCode=3;


    // Get CartoDB selection as GeoJSON and logs out the data it returned
    function populateShootings(city, cityCode){
      return new Promise(function (resolve, reject) {
        $.getJSON("https://phl.carto.com/api/v2/sql?q="+city, function(data) {
        sampleLocations = data;

        console.log(sampleLocations);
        switch(cityCode) {
          case 0:
            centerCityData = sampleLocations;
            centerCityCount = sampleLocations.total_rows;
            break;
          case 1:
            northWestData = sampleLocations;
            northWestCount = sampleLocations.total_rows;
            break;
          case 2:
            northPhillyData = sampleLocations;
            northPhillyCount = sampleLocations.total_rows;
            break;
          case 3:
            southPhillyData = sampleLocations;
            southPhillyCount = sampleLocations.total_rows;
            break;
          default:
            console.log("no match");

        }

        console.log("this is the count CC = " + centerCityCount);
        console.log("this is the count NW = " + northWestCount);
        console.log("this is the count NP = " + northPhillyCount);
        console.log("this is the count SP = " + southPhillyCount);

        resolve(true)
        });
      })
    };

  var mapDiv = $('#mapid');
  console.log(mapDiv + 'map');

  var myMainMap = L.map(mapDiv[0]).setView([39.952, -75.165], 12);

      //var centerCityMap = L.map('mapid').setView([-75.1621763, 39.952446], 16);

  //     L.tileLayer( 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  //       attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  //       subdomains: ['a','b','c']
  // }).addTo( mymap );

  L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png',{
    attribution: '© <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors © <a href="http://cartodb.com/attributions#basemaps">CartoDB</a>',
    maxZoom: 15,
    minZoom: 10,
    subdomains: 'abcd'
}).addTo(myMainMap);

//colorMap();

   Promise.all([populateShootings(center_city_query, centerCityCode),
   populateShootings(north_west_query, northWestCode),
   populateShootings(north_philly_query, northPhillyCode),populateShootings(south_phila_query,southPhillyCode)]).then(colorMap)

    //populateShootings(south_phila_query);

function colorMap(){
    $.ajax({
      type: "GET",
      url: "https://raw.githubusercontent.com/andresagu/projectOne/master/phila.geojson",
      success: function (hoodData) {
        L.geoJson( hoodData  , {
        style: function(feature){
          var fillColor;
          var name = feature.properties.name;
          var centerCityDensity = centerCityCount;
          var southPhillyDensity = southPhillyCount;

          console.log(name);
          if(name === "Center City" && centerCityDensity>10){
            fillColor = "#F08080";

          }
          else if(name==="North Philadelphia" && northPhillyCount>2000){
            fillColor = "#FF0000";

          }
          else if(name==="Northwest Philadelphia" && northWestCount>1000){
            fillColor = "#FF6347";
          }
          else if(name==="South Philadelphia" && southPhillyCount>400){
            fillColor = "#CD5C5C";

          }
          else fillColor = "#DCDCDC";  // no data
          return { color: "#999", weight: 1, fillColor: fillColor, fillOpacity: .6 };
        },
        onEachFeature: function( feature, layer ){
          layer.bindPopup( "<strong>" + feature.properties.name + "</strong><br/>" + feature.properties.total_rows + " shootings have occured in this area" )
        }
        }).addTo(myMainMap);
        return Promise.resolve(true)
      },
      dataType: "json",
      cache: false
    });
}


// $.getJSON('https://raw.githubusercontent.com/andresagu/projectOne/master/phila.geojson',function(hoodData){
//  L.geoJson( hoodData ).addTo(myMainMap);
// });
