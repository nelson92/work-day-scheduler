// var date = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
// $("#currentDay").text(date);

var timeDisplayEl = $("#currentDay");

function displayTime() {
     var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
     timeDisplayEl.text(rightNow);
   }






















   setInterval(displayTime, 1000);

   
   $(function() {
     $("#selectable").selectable({
        placeholder: "ui-widget-content",
     });

   });
 