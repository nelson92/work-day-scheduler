// local storage








// color coding text area by time
// jquery .each for each element

var currentTime = moment().format('hh:mm a')
console.log(currentTime);

var colorCodes = document.querySelectorAll(".hour");
var currentHour = moment().hour(); // Number
// console.log(currentHour);



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

// var currentTime = today.format("N");

// if(currentTime > ){
//   document.getElementByClass("hour").className += "future";
// } else if (currentTime <  ){
//   document.getElementByClass("hour").className += "past";
// } else cdocument.getElementByClass("hour").className += "present"

$( ".saveBtn" ).on( "click", function() {
  console.log($(this).siblings("textarea").val())
});





var timeDisplayEl = $("#currentDay");

function displayTime() {
     var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
     timeDisplayEl.text(rightNow);
   }

   var buttons = document.querySelectorAll(".saveBtn");
   for(let i = 0; i < buttons.length; i++)  {
    buttons[i].addEventListener("click",function() {
        alert("Saved");
        // not sure if i want an alert here
    })
   }


   setInterval(displayTime, 1000);

   
  //  $(function() {
  //    $("#selectable").selectable({
  //       placeholder: "ui-widget-content",
  //    });

  //  });
 