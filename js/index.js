// Write your JS here
import test from './script2.js';

var database = firebase.database();
var databaseRef = database.ref("/");
{/* <div class="col-lg-4 col-sm-6 portfolio-item">
              <div class="card h-100">
                <a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a>
                <div class="card-body">
                  <h4 class="card-title">
                    <a href="#">Project One</a>
                  </h4>
                  <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!</p>
                </div>
              </div>
            </div> */}
// Read the data from the database and take a snapshot of that data.
databaseRef.once("value").then(function(snapshot) {
 // Use .val() to get the data from the snapshot.
 const directory = snapshot.val();
 console.log(directory)
 var stories = $("#stories")
    for(var key in directory){
        console.log(key);
        console.log(directory[key].age);
        var age = directory[key].age
        var title = directory[key].title
        var story = directory[key].story
        var country = directory[key].country
        var div = $("<div>").text("age: " + age + " country: " + country + " title: " + title + " story: " + story );
        $("#stories").append(div);
    }
    
});
$("#submit").click(function(){
        //$("#age").val()
        databaseRef.push({
            age:$("#age").val(),
            country:$("#country").val(),
            story:$("#story").val(),
            title:$("#title").val()
        })
}   
    );
