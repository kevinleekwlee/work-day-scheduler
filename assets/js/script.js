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
    let currentTime = moment().format("HH");
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

// Use local storage to save schedule item entries to their matching timeDiv. 
$(".saveBtn").click(function(event) {
    event.preventDefault();
    
    let slot = 09;
    let task = $(".task").val;
    console.log(task);

    localStorage.setItem(slot,task);    
})