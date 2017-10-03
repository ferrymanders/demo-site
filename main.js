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
				array[key] = value;
			});
		}
	});
	
	$.each(array, function(key, value) {
		console.log(key + ' => ' + value);
	}); 
  
}

$(document).ready(function() {
	getVersions();
});
