function Brakets_PARSER() {

$(document).ready(function(){

  var diagnoz = 'Хорошо';
  var st = $("#Brakets_editor").val();
  var l = st.length;
  var stack= [];
  var c='';
  for (var i=0; i<l; i++) {
    c = st[i];  
			//alert( c );

    switch(c){
		case '{'  : stack.push(c);
					break;
		case '[' : stack.push(c);
					break;
		case '('  : stack.push(c);
					break;
		case '<'  : stack.push(c);
					break;
		case '}' :
		case ']' :
		case ')' :
		case '>' :
		if (stack.length == 0)  {
			diagnoz =  'Плохо';
			alert( 'Плохая строка' );
		}else{                 //alert( stack.indexOf("{") );
			 if (stack[stack.length - 1] == lessif(c))  {
				 stack.pop();
			}else{
				diagnoz =  'Плохо';
				alert( 'Плохая строка' );
			}
		}
		break;
		}
	}
		 /*if (stack.length== 0)  {
			diagnoz =  'Плохо';
		alert( 'Плохая строка]' );
			break;
		};
		if (stack[stack.length-1]== '[')  {
			stack = stack.slice(0, stack.length-1);
		};
		break;
		 if (stack.length== 0)  {
			diagnoz =  'Плохо';
					alert( 'Плохая строка )' );
			break;
			 
		};
		if (stack[stack.length-1]== '(')  {
			stack = stack.slice(0, stack.length-1);
		};
          
	}
      alert( stack);
	}*/   
                         
      if ((!stack.length)&&(diagnoz =='Хорошо'))  {
          alert( 'Хорошая строка' );
		} else {
			alert( 'Плохая строка' );
		}
   
  
});
}

function lessif(bracket)
		{
			Br='';
			if(bracket == '}') Br= '{';
			if(bracket == ')') Br= '(';
			if(bracket == ']') Br= '[';
			if(bracket == '>') Br= '<';
			return Br;
		}