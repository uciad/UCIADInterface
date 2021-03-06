function createMap(gendpoint, gquery, type, gwidth, gheight, elem){
  //  alert(unescape(gendpoint));
  var sparqler = new SPARQL.Service(unescape(gendpoint));
  var query = sparqler.createQuery();
  query.query(gquery, {failure: failed, success:
	  function(json){showResultsOnMap(json,elem)}}); 
}

function displayCoords(locations){
	alert(locations[i][0] +locations[i][1]);
	return;
}

function showResultsOnMap(json, elem){

	var locations=[];
	//int count=0;
	for (x in json['results']['bindings']){	    
		var value = parseInt(json['results']['bindings'][x]['n']['value']);
		var coords = getFragment(json['results']['bindings'][x]['cat']['value']).replace(/_/g, " ");
		locations[x]= coords.split(",");
	}


     var map = new google.maps.Map(document.getElementById(elem), {
      zoom: 5,
      center: new google.maps.LatLng(52.025063, -0.709906),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow();

    var marker, i;

    for (i = 0; i < locations.length; i++) {  
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][0], locations[i][1]),
        map: map
      });
	
	// On click marker listenener
      google.maps.event.addListener(marker, 'click', (function(marker, i){
			return function(){
			    window.location.href=window.location.href+"&lat="+locations[i][0]+"&long="+locations[i][1];	      
			//			    alert("lat="+locations[i][0]+" long=" + locations[i][1]);
			}
		})(marker,i));
    }
}