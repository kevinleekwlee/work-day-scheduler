// Adds the current date in the header.
function displayDate() {
    setInterval(function() {
        var time = moment().format("MMM Do, YYYY, hh:mm:ss");
        $("#currentDay").text(time);        
    }, 1000);
}

displayDate();

// Dictates the timeblocks to change color according to relative time.
$(".timeDiv").each(function() {
    let timeDiv = $(this).attr("id");
    let currentTime = 12;
    console.log(timeDiv);

    if (currentTime == timeDiv){
        $(this).addClass("present");
    } else if (currentTime < timeDiv) {
        $(this).removeClass("present");
        $(this).addClass("future");
    } else if (currentTime > timeDiv) {
        $(this).removeClass("present");
        $(this).addClass("past");
    }  
})
 
// Use local storage to save schedule task entries to their matching time slot. 

$(".saveBtn").click(function(event) {
    event.preventDefault();
    
    let slot = $(event.target).parent().parent().attr("id");
    let task = $(event.target).parent().prev().children().val();
    
    console.log(task);
    console.log(slot);

    localStorage.setItem(slot,task);
});

// Use local storage to render the last saved scheduled task and populate it into the matching time slot upon page load.

$(document).ready(function() {
    $("#task1").text(localStorage.getItem("09"));
    $("#task2").text(localStorage.getItem("10"));
    $("#task3").text(localStorage.getItem("11"));
    $("#task4").text(localStorage.getItem("12"));
    $("#task5").text(localStorage.getItem("13"));
    $("#task6").text(localStorage.getItem("14"));
    $("#task7").text(localStorage.getItem("15"));
    $("#task8").text(localStorage.getItem("16"));
    $("#task9").text(localStorage.getItem("17"));
});