

google.load('visualization', '1.0', {'packages':['corechart']});


function createGraph(gendpoint, gquery, type, elem, specialcase, options, attr){
  //  alert(unescape(gendpoint));
  var sparqler = new SPARQL.Service(unescape(gendpoint));
  var query = sparqler.createQuery();
  query.query(gquery, {failure: failed, success:
	  function(json){showResults(json, type, elem, specialcase, options, attr)}}); 
}

function showResults(json, type, elem, specialcase, options, attr){
  if (type==3){
    var tc = TagCloud.create();
    for (x in json['results']['bindings']){
      tc.add(getFragment(json['results']['bindings'][x]['cat']['value']), 
	     parseInt(json['results']['bindings'][x]['n']['value']), 
	     '', Date.parse('2011/01/01 00:00:00'));
    }
    tc.loadEffector('CountSize').base(10).range(5);
    tc.setup(elem);
  } else {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'categories');
    data.addColumn('number', 'count');
    
    if (specialcase == 0){
	for (x in json['results']['bindings']){	    
	    data.addRow([getFragment(json['results']['bindings'][x]['cat']['value']), parseInt(json['results']['bindings'][x]['n']['value'])]);
	}
    } else if (specialcase == 1){
	found = false
	for (x in json['results']['bindings']){	    
	    if (getFragment(json['results']['bindings'][x]['cat']['value']).indexOf("Monday") != -1){
		data.addRow(["Monday", parseInt(json['results']['bindings'][x]['n']['value'])]);
		found = true;
	    }
	}
	if (!found) data.addRow(["Monday", 0]);
	found = false
	for (x in json['results']['bindings']){	    
	    if (getFragment(json['results']['bindings'][x]['cat']['value']).indexOf("Tuesday") != -1){
		data.addRow(["Tuesday", parseInt(json['results']['bindings'][x]['n']['value'])]);
		found = true;
	    }
	}
	if (!found) data.addRow(["Tuesday", 0]);
	found = false
	for (x in json['results']['bindings']){	    
	    if (getFragment(json['results']['bindings'][x]['cat']['value']).indexOf("Wednesday") != -1){
		data.addRow(["Wednesday", parseInt(json['results']['bindings'][x]['n']['value'])]);
		found = true;
	    }
	}
	if (!found) data.addRow(["Wednesday", 0]);
	found = false
	for (x in json['results']['bindings']){	    
	    if (getFragment(json['results']['bindings'][x]['cat']['value']).indexOf("Thursday") != -1){
		data.addRow(["Thursday", parseInt(json['results']['bindings'][x]['n']['value'])]);
		found = true;
	    }
	}
	if (!found) data.addRow(["Thursday", 0]);
	found = false
	for (x in json['results']['bindings']){	    
	    if (getFragment(json['results']['bindings'][x]['cat']['value']).indexOf("Friday") != -1){
		data.addRow(["Friday", parseInt(json['results']['bindings'][x]['n']['value'])]);
		found = true;
	    }
	}
	if (!found) data.addRow(["Friday", 0]);
	found = false
	for (x in json['results']['bindings']){	    
	    if (getFragment(json['results']['bindings'][x]['cat']['value']).indexOf("Saturday") != -1){
		data.addRow(["Saturday", parseInt(json['results']['bindings'][x]['n']['value'])]);
		found = true;
	    }
	}
	if (!found) data.addRow(["Saturday", 0]);
	found = false
	for (x in json['results']['bindings']){	    
	    if (getFragment(json['results']['bindings'][x]['cat']['value']).indexOf("Sunday") != -1){
		data.addRow(["Sunday", parseInt(json['results']['bindings'][x]['n']['value'])]);
		found = true;
	    }
	}
	if (!found) data.addRow(["Sunday", 0]);
    } else if (specialcase == 2){
	found = false
	for (x in json['results']['bindings']){	    
	    if (getFragment(json['results']['bindings'][x]['cat']['value']).substr(-2) == "r0"){
		data.addRow(["0", parseInt(json['results']['bindings'][x]['n']['value'])]);
		found = true;
	    }
	}
	if (!found) data.addRow(["0", 0]);
	found = false
	for (x in json['results']['bindings']){	    
	    if (getFragment(json['results']['bindings'][x]['cat']['value']).substr(-2) == "r1"){
		data.addRow(["1", parseInt(json['results']['bindings'][x]['n']['value'])]);
		found = true;
	    }
	}
	if (!found) data.addRow(["1", 0]);
	found = false
	for (x in json['results']['bindings']){	    
	    if (getFragment(json['results']['bindings'][x]['cat']['value']).substr(-2) == "r2"){
		data.addRow(["2", parseInt(json['results']['bindings'][x]['n']['value'])]);
		found = true;
	    }
	}
	if (!found) data.addRow(["2", 0]);
	found = false
	for (x in json['results']['bindings']){	    
	    if (getFragment(json['results']['bindings'][x]['cat']['value']).substr(-2) == "r3"){
		data.addRow(["3", parseInt(json['results']['bindings'][x]['n']['value'])]);
		found = true;
	    }
	}
	if (!found) data.addRow(["3", 0]);
	found = false
	for (x in json['results']['bindings']){	    
	    if (getFragment(json['results']['bindings'][x]['cat']['value']).substr(-2) == "r4"){
		data.addRow(["4", parseInt(json['results']['bindings'][x]['n']['value'])]);
		found = true;
	    }
	}
	if (!found) data.addRow(["4", 0]);
	found = false
	for (x in json['results']['bindings']){	    
	    if (getFragment(json['results']['bindings'][x]['cat']['value']).substr(-2) == "r5"){
		data.addRow(["5", parseInt(json['results']['bindings'][x]['n']['value'])]);
		found = true;
	    }
	}
	if (!found) data.addRow(["5", 0]);
	found = false
	for (x in json['results']['bindings']){	    
	    if (getFragment(json['results']['bindings'][x]['cat']['value']).substr(-2) == "r6"){
		data.addRow(["6", parseInt(json['results']['bindings'][x]['n']['value'])]);
		found = true;
	    }
	}
	if (!found) data.addRow(["6", 0]);
	found = false
	for (x in json['results']['bindings']){	    
	    if (getFragment(json['results']['bindings'][x]['cat']['value']).substr(-2) == "r7"){
		data.addRow(["7", parseInt(json['results']['bindings'][x]['n']['value'])]);
		found = true;
	    }
	}
	if (!found) data.addRow(["7", 0]);
	found = false
	for (x in json['results']['bindings']){	    
	    if (getFragment(json['results']['bindings'][x]['cat']['value']).substr(-2) == "r8"){
		data.addRow(["8", parseInt(json['results']['bindings'][x]['n']['value'])]);
		found = true;
	    }
	}
	if (!found) data.addRow(["8", 0]);
	found = false
	for (x in json['results']['bindings']){	    
	    if (getFragment(json['results']['bindings'][x]['cat']['value']).substr(-2) == "r9"){
		data.addRow(["9", parseInt(json['results']['bindings'][x]['n']['value'])]);
		found = true;
	    }
	}
	if (!found) data.addRow(["9", 0]);
	found = false
	for (x in json['results']['bindings']){	    
	    if (getFragment(json['results']['bindings'][x]['cat']['value']).indexOf("10") != -1){
		data.addRow(["10", parseInt(json['results']['bindings'][x]['n']['value'])]);
		found = true;
	    }
	}
	if (!found) data.addRow(["10", 0]);
	found = false
	for (x in json['results']['bindings']){	    
	    if (getFragment(json['results']['bindings'][x]['cat']['value']).indexOf("11") != -1){
		data.addRow(["11", parseInt(json['results']['bindings'][x]['n']['value'])]);
		found = true;
	    }
	}
	if (!found) data.addRow(["11", 0]);
	found = false
	for (x in json['results']['bindings']){	    
	    if (getFragment(json['results']['bindings'][x]['cat']['value']).indexOf("12") != -1){
		data.addRow(["12", parseInt(json['results']['bindings'][x]['n']['value'])]);
		found = true;
	    }
	}
	if (!found) data.addRow(["12", 0]);
	found = false
	for (x in json['results']['bindings']){	    
	    if (getFragment(json['results']['bindings'][x]['cat']['value']).indexOf("13") != -1){
		data.addRow(["13", parseInt(json['results']['bindings'][x]['n']['value'])]);
		found = true;
	    }
	}
	if (!found) data.addRow(["13", 0]);
	found = false
	for (x in json['results']['bindings']){	    
	    if (getFragment(json['results']['bindings'][x]['cat']['value']).indexOf("14") != -1){
		data.addRow(["14", parseInt(json['results']['bindings'][x]['n']['value'])]);
		found = true;
	    }
	}
	if (!found) data.addRow(["14", 0]);
	found = false
	for (x in json['results']['bindings']){	    
	    if (getFragment(json['results']['bindings'][x]['cat']['value']).indexOf("15") != -1){
		data.addRow(["15", parseInt(json['results']['bindings'][x]['n']['value'])]);
		found = true;
	    }
	}
	if (!found) data.addRow(["15", 0]);
	found = false
	for (x in json['results']['bindings']){	    
	    if (getFragment(json['results']['bindings'][x]['cat']['value']).indexOf("16") != -1){
		data.addRow(["16", parseInt(json['results']['bindings'][x]['n']['value'])]);
		found = true;
	    }
	}
	if (!found) data.addRow(["16", 0]);
	found = false
	for (x in json['results']['bindings']){	    
	    if (getFragment(json['results']['bindings'][x]['cat']['value']).indexOf("17") != -1){
		data.addRow(["17", parseInt(json['results']['bindings'][x]['n']['value'])]);
		found = true;
	    }
	}
	if (!found) data.addRow(["17", 0]);
	found = false
	for (x in json['results']['bindings']){	    
	    if (getFragment(json['results']['bindings'][x]['cat']['value']).indexOf("18") != -1){
		data.addRow(["18", parseInt(json['results']['bindings'][x]['n']['value'])]);
		found = true;
	    }
	}
	if (!found) data.addRow(["18", 0]);
	found = false
	for (x in json['results']['bindings']){	    
	    if (getFragment(json['results']['bindings'][x]['cat']['value']).indexOf("19") != -1){
		data.addRow(["19", parseInt(json['results']['bindings'][x]['n']['value'])]);
		found = true;
	    }
	}
	if (!found) data.addRow(["19", 0]);
	found = false
	for (x in json['results']['bindings']){	    
	    if (getFragment(json['results']['bindings'][x]['cat']['value']).indexOf("20") != -1){
		data.addRow(["20", parseInt(json['results']['bindings'][x]['n']['value'])]);
		found = true;
	    }
	}
	if (!found) data.addRow(["20", 0]);
	found = false
	for (x in json['results']['bindings']){	    
	    if (getFragment(json['results']['bindings'][x]['cat']['value']).indexOf("21") != -1){
		data.addRow(["21", parseInt(json['results']['bindings'][x]['n']['value'])]);
		found = true;
	    }
	}
	if (!found) data.addRow(["21", 0]);
	found = false
	for (x in json['results']['bindings']){	    
	    if (getFragment(json['results']['bindings'][x]['cat']['value']).indexOf("22") != -1){
		data.addRow(["22", parseInt(json['results']['bindings'][x]['n']['value'])]);
		found = true;
	    }
	}
	if (!found) data.addRow(["22", 0]);
	found = false
	for (x in json['results']['bindings']){	    
	    if (getFragment(json['results']['bindings'][x]['cat']['value']).indexOf("23") != -1){
		data.addRow(["23", parseInt(json['results']['bindings'][x]['n']['value'])]);
		found = true;
	    }
	}
	if (!found) data.addRow(["23", 0]);
    }
    if (type==1){
      var chart = new google.visualization.BarChart(document.getElementById(elem));
      google.visualization.events.addListener(chart, 'select', function() {	     
	      //	      alert(data.getValue(chart.getSelection()[0].row, 0));
	      window.location.href=window.location.href+"&"+attr+"="+escape(data.getValue(chart.getSelection()[0].row, 0));	      
	  });
    } else if (type==2){
      var chart = new google.visualization.PieChart(document.getElementById(elem));    
      google.visualization.events.addListener(chart, 'select', function() {	     
	      //	      alert(data.getValue(chart.getSelection()[0].row, 0));
	      window.location.href=window.location.href+"&"+attr+"="+escape(data.getValue(chart.getSelection()[0].row, 0));	      
	  });
  } else if (type==4){
      var chart = new google.visualization.ColumnChart(document.getElementById(elem));    
      google.visualization.events.addListener(chart, 'select', function() {	     
	      //	      alert(data.getValue(chart.getSelection()[0].row, 0));
	      window.location.href=window.location.href+"&"+attr+"="+escape(data.getValue(chart.getSelection()[0].row, 0));	      
	  });
    }
    chart.draw(data, options);
  }
}

function getFragment(uri){
    if (uri.indexOf("http")!=0) return uri;
   var ind = uri.lastIndexOf("#")+1;
   if (ind!=0) return uri.substring(ind);
   var ind = uri.lastIndexOf("/")+1;
   if (ind == uri.length) return uri;
   return uri.substring(ind);
}

function failed(){
     alert("query failed");
 }



