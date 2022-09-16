// local storage

// color coding text area by time


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

   
   $(function() {
     $("#selectable").selectable({
        placeholder: "ui-widget-content",
     });

   });
 