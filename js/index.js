// Write your JS here
import test from './script2.js';

console.log('test');

test();

function appendImageToBody(srcURL) {
    // write a function that will append an <img> to the body with the
    // URL provided in the parameters
    $('#here').append('<img src=' + srcURL + '>');
}
function callGiphyAPIWithSearchTerm(searchTerm) {
  var newUrl= "https://api.giphy.com/v1/stickers/search?q=" + searchTerm + "&api_key=AIzaSyBLuDHEdEXQ08sZMu11xbaP6JJQsF4TaZg";
    $.ajax({
      url: newUrl,
      method: "GET",
      success: function(response) {
        
        for(var i=0;i < response.data.length ; i++){
          var url = response.data[i].images.original.url;
          appendImageToBody(url);
          
           
        }
       
      console.log(response);
      console.log(response.data.length);
      },
    }); 
}