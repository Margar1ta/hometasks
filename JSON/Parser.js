function JSON_PARSER() {
$(document).ready(function(){

	  $("div").text("The DOM is now loaded and can be manipulated.");
$("p").text("The DOM is now loaded and can be manipulated.");
var request = new XMLHttpRequest();
   request.open("GET", "Beatles.json", false);
   request.send(null);
   var cart = JSON.parse(request.responseText);
   showAlboms(cart.The_Beatles_discography);  
    });


function showAlboms(The_Beatles_discography){
	for (var i=0; i<The_Beatles_discography.length; i++)
	{
		var str = '';
str+='<p>'+ The_Beatles_discography[i].Title + ' was released on ' + The_Beatles_discography[i].Released;
if ('Label' in The_Beatles_discography[i]) {
 str+=" It's Label is " + The_Beatles_discography[i].Label;
    }
if ('Songs' in The_Beatles_discography[i]) {
str+=". It's songs are:" +The_Beatles_discography[i].Songs[0];
   for(var j=1; j<The_Beatles_discography[i].Songs.length;j++){	      str+=", " + The_Beatles_discography[i].Songs[j];
	    }
      str+='. ';
    };

     if ("Certifications" in The_Beatles_discography[i]) {
      str+=" It's certifications are: "+ The_Beatles_discography[i].Certifications[0];
      for(var j=1; j<The_Beatles_discography[i].Certifications.length; j++){
	      str+=', ' + The_Beatles_discography[i].Certifications[j];
	    }
      str+='. ';
    };

str+= '</p>';
		$('#albomlist').append(str);
	}
        
};
}
