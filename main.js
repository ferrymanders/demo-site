function getVersions(){
	$.ajax({
		type: "GET",
		url: "/api.php",
		cache: false,
		dataType: "json",
		success: function(data) {
      $.each(data, function(key, value) {
        //display the key and value pair
        alert(key + ' is ' + value);
      });

		}
	});
	
}

$(document).ready(function() {
	getVersions();
});
