
function Promise(s)
{
return new MyPromise(function(resolve,reject){
var xhr = new XMLHttpRequest();
             
  		xhr.open('POST', 'http://kodaktor.ru/api/req?name=ilva&sleep='+s, true);
  		xhr.responseType = 'json';  

})

}
