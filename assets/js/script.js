// Adds the current date in the header.
function displayDate() {
    setInterval(function() {
        let time = moment().format("MMM Do, YYYY, hh:mm:ss");
        $("#currentDay").text(time);        
    }, 1000);
}

displayDate();

// Dictates the timeblocks to change color according to relative time.
$(".timeDiv").each(function() {
    let timeDiv = $(this).attr("id");
    let currentTime = moment().format("HH");
    console.log(timeDiv);
    console.log(currentTime);

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

// Save schedule items and their matching timeDiv to local storage.
$(".saveBtn").click(function(event){
    event.preventDefault();
    
})