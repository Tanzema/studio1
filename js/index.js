// Write your JS here
import test from './script2.js';

var database = firebase.database();
var databaseRef = database.ref("/");

// Read the data from the database and take a snapshot of that data.
databaseRef.once("value").then(function(snapshot) {
 // Use .val() to get the data from the snapshot.
 const directory = snapshot.val();
 console.log(directory);
 $("body").append(directory)
    for(var key in directory){
        console.log(key);
        console.log(directory[key].age);
        $("body").append(directory[key].age);
    }
    
});
$("#submit").click(function(){
        //$("#age").val()
        databaseRef.push({
            age:$("#age").val(),
            cuntry:$("#cuntry").val(),
            story:$("#story").val(),
            title:$("#title").val()
        })
}   
    );
