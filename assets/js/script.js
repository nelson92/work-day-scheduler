var currentTime = moment().format('hh:mm a');
console.log(currentTime);
 
var colorCodes = document.querySelectorAll(".hour");
var currentHour = moment().hour(); 
 
 
$( ".description" ).each(function() {
 var timeBlock = $(this).attr('id')
 console.log(timeBlock)
 if(currentHour > timeBlock){
   $(this).addClass("past")
 }else if(currentHour < timeBlock){
   $(this).addClass("future")
 }else{
   $(this).addClass("present")
 }
});
 

$( ".saveBtn" ).on( "click", function() {
 console.log($(this).siblings("textarea").val())
});
 
 
 
 
 
var timeDisplayEl = $("#currentDay");
 
function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(rightNow);
  };
 
  var buttons = document.querySelectorAll(".saveBtn");
  for(let i = 0; i < buttons.length; i++)  {
   buttons[i].addEventListener("click",function() {
       alert("Saved");
       // not sure if i want an alert here
   })
  };
 
 
  setInterval(displayTime, 1000);
 
 
// local storage
 
 
// for each description, create 2 variables (textarea and hour) if, else, make a for loop if hour ===
 
// localStorage.content = $('#test').html('Test');
 
// $('#test').html(localStorage.content);
 
 
// var areaText = $(this).siblings("textarea").val
 
// var divHour = $(this).parent.siblings("div")
 
// $(".description").each(function() {
//    for(saved.length = 0; i < saved.length; i++)
//    if(divHour === saved[i].divHour) {
//      console.log($(this).val())
//      $(this).val(saved[i].areaText)
//    }
  
// }
 
// )
 
// set up local storage - console log areaText and divHour variables
 
 
 
// // var buttons = document.querySelectorAll(".saveBtn");
// for(let i = 0; i < buttons.length; i++)  {
//   buttons[i].addEventListener("click",function() {
//       alert("Saved");
//       // not sure if i want an alert here
//   })
//  }
 
// function displayTime() {
//   var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
//   timeDisplayEl.text(rightNow);
// }
 


// if(hour === saved[i].hour) {
//  console.log($(this).val())
//  $(this).val(saved[i].text)
// };
 
 
 




// var currentTime = today.format("N");
 
// if(currentTime > ){
//   document.getElementByClass("hour").className += "future";
// } else if (currentTime <  ){
//   document.getElementByClass("hour").className += "past";
// } else cdocument.getElementByClass("hour").className += "present"
 