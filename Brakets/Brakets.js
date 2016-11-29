function Brakets_PARSER() {

$(document).ready(function(){

  var diagnoz = 'Хорошо';
  var st='';
   var st = $("#Brakets_editor").val();
  var l = st.length;
  var stack= '';
  var c='';
  for (var i=0; i<l; i++) {
    c = st[i];  
			//alert( c );

    switch(c){
		case '{'  : stack = stack + c;
				break;
		case '[' : stack = stack + c;
				break;
		case '('  : stack = stack + c;
		break;
		case '}':  if (stack.length== 0)  {
			diagnoz =  'Плохо';
		alert( 'Плохая строка }' );
			break;
		}; alert( stack.indexOf("{") );
		 if (stack.indexOf("{"))  {
			 stack.replace("{","")
		};
		break;
		case  ']' : if (stack.length== 0)  {
			diagnoz =  'Плохо';
		alert( 'Плохая строка]' );
			break;
		};
		if (stack[stack.length-1]== '[')  {
			stack = stack.slice(0, stack.length-1);
		};
		break;
		case ')' : if (stack.length== 0)  {
			diagnoz =  'Плохо';
					alert( 'Плохая строка )' );
			break;
			 
		};
		if (stack[stack.length-1]== '(')  {
			stack = stack.slice(0, stack.length-1);
		};
          
	}
      alert( stack);
	}   
                         
      if ((stack.length== 0)&&(diagnoz=='Хорошо'))  {
          alert( 'Хорошая строка' );
		} else {
			alert( 'Плохая строка' );
		}
   
  
});
}