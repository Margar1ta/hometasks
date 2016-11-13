function JSON_PARSER() {
$(document).ready(function(){

	  $("div").text("The DOM is now loaded and can be manipulated.");
$("p").text("The DOM is now loaded and can be manipulated.");
	
	});
}
	/*
var request = new XMLHttpRequest();

   request.open("GET", "Beatles.json", false);

   request.send(null);

   var cart = JSON.parse(request.responseText);

   showAlboms(cart.The_Beatles_discography);  

    });





function showAlboms(The_Beatles_discography){

	for (var i=0; i<The_Beatles_discography.length; i++)

	{

		var str = '<table><tr><th>Title</th><th>Release date</th><th>Label</th><th>Songs</th><th>Certifications</th></tr>';

str+='<tr><tb>'+The_Beatles_discography[i].Title+'</tb><tb> + The_Beatles_discography[i].Released+'</tb>';

if ('Label' in The_Beatles_discography[i]) {

 str+='<tb>'+ The_Beatles_discography[i].Label+'</tb>';

    } else  str+='<tb></tb>';

if ('Songs' in The_Beatles_discography[i]) {

str+='<tb>'+The_Beatles_discography[i].Songs[0];

   for(var j=1; j<The_Beatles_discography[i].Songs.length;j++){	      str+=", " + The_Beatles_discography[i].Songs[j];

	    }

      str+='</tb>';

    }; else str+='<tb></tb>'



     if ("Certifications" in The_Beatles_discography[i]) {

      str+='<tb>'+ The_Beatles_discography[i].Certifications[0];

      for(var j=1; j<The_Beatles_discography[i].Certifications.length; j++){

	      str+=', ' + The_Beatles_discography[i].Certifications[j];

	    }

      str+='.</tb>';

    }; else str+='<tb></tb></tr>'



str+= '</table>';

		$('#albomlist').append(str);

	}

        
*/

