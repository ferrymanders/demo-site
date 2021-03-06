var hostdata = [];

function dump(obj) {
	var out = '';
	for (var i in obj) {
		out += i + ": " + obj[i] + "\n";
		console.log(obj[i]);
	}
	
	var pre = document.createElement('pre');
	pre.innerHTML = out;
	document.body.appendChild(pre)
}

function getVersions(){
  var array = [];
	$.ajax({
		type: "GET",
		url: "/api.php",
		cache: false,
		dataType: "json",
		success: function(data) {
			$.each(data, function(key, value) {
				setHostData(key, value);
			});
		}
	});
  
}

function setHostData(host, value)
{
	var array = [];
	var timenow = (new Date).getTime();
	array.version = value;
	array.time = timenow;
	hostdata[host] = array;
	for (var prop in hostdata) {
		if (hostdata.hasOwnProperty(prop)) { 
			var timecheck = 0;
			var timenow = (new Date).getTime();
			timecheck = timenow - hostdata[prop].time;
			//console.log(' timecheck :' + timecheck);
			if ( timecheck > 10000 ) {
				delete hostdata[prop];
			}
		}
	}

	$("#data").empty();
	for (var prop in hostdata) {
		if (hostdata.hasOwnProperty(prop)) { 
				var div = document.getElementById(prop);
				if (!div)
				{
					$("#data").append('<tr id="' + prop + '"><td>' + prop + '</td><td>' + hostdata[prop].version + '</td></tr>'); 
				}else{
					$('#'.prop).html('<td>' + prop + '</td><td>' + hostdata[prop].version + '</td>');
				}
		}
	}
	
	
}

$(document).ready(function() {
	doActions();
});

function doActions() {
	getVersions();
	//dump(hostdata);
	setTimeout("doActions()", 500);
}
