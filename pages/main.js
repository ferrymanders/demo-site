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
       				var div = document.getElementById(key);
				array[key] = value;
				if (!div)
				{
					$("#data").append('<tr id="' + key + '"><td>' + key + '</td><td>' + value + '</td></tr>'); 
				}else{
					$('#'.key).html('<td>' + key + '</td><td>' + value + '</td>');
				}
			});
		}
	});
  
}

$(document).ready(function() {
	doActions();
});

function doActions() {
	getVersions();
	setTimeout("doActions()", 1000);
}
