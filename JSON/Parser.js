$(document).ready(function() {

	$.getJSON('Beatles.json', function(object) {
		$('#Boolean').text(object.Boolean);
    $('#String').text(object.String);
    showAlboms(object.The_Beatles_discography);
      


    });
	
});

function showAlboms(The_Beatles_discography){
	for (albom of The_Beatles_discography)
	{
		var string = '';
		string+='<p>' + albom.Title + ' was released on ' + albom.Released;
    
    if ("Label" in albom) {
      string+='. It's Label is ' + albom.Label;
    };
    
    if ("Songs" in albom) {
      string+='. It's songs are: '+ albom.Songs[0];
      for(var i=1; i<albom.Songs.length; i++){
	      string+=', ' + albom.Songs[i];
	    }
      string+='. ';
    };
    
     if ("Certifications" in albom) {
      string+=' It's certifications are: '+ albom.Certifications[0];
      for(var i=1; i<albom.Certifications.length; i++){
	      string+=', ' + albom.Certifications[i];
	    }
      string+='. ';
    };
    
     string+=</p>';
	$('#albomlist').append(string);
	}
        
};
