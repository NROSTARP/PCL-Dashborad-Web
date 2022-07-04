// $('.nav-toggle').click(function(e) {
  
//     e.preventDefault();
//     $("html").toggleClass("openNav");
//     $(".nav-toggle").toggleClass("active");
  
//   });

  //---------------------------------------- Time function -----------------------------------------//

var timeDisplay = document.getElementById("time");

function refreshTime() {
  var dateString = new Date().toLocaleString("en-US", {timeZone: "Asia/Bangkok"});
  var formattedString = dateString.replace(", ", " - ");
  timeDisplay.innerHTML = formattedString;
}

setInterval(refreshTime, 1000);

function al() {
  alert("Be careful Open 'Teaching Mode' AutoMode to Stop");
}