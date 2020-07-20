function(){
    var a = b = 3;
  })();
  console.log("a defined? " + (typeof a !== 'undefined'));
  console.log("b defined? " + (typeof b !== 'undefined'));



 // Write a function that would allow you to do this using a closure. 


 function addUp(num){ 
     return function(add){
        return num + add;
     }
 }

 let addTo = addUp(12); //adding 12 to every number passed into addTo(15); = 27 

 // above we're declaring our function addUp with one parameter Num and insided this function we're using our closure 
 // to return the base with our parameter add. We're then returning inside our closure the num + add to add up
 // When we're declaring our new variable 'addTo' we're saying it should equal what the parent of the anonomous function
 // does which is 'addUp' taking it's child 'the closures' logic. 