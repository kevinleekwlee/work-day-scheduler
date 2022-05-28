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

// Use local storage to render the last saved scheduled task and populate it into the matching time slot. 
function renderLastRegistered() {
    let userSlot = localStorage.getItem("slot");
    let userTask = localStorage.getItem("task");
    
    console.log(userSlot);
    console.log(userTask);

    if (!slot || !task) {
        return;
    }

    $("#task1").text(userTask);

}

// Use local storage to save schedule task entries to their matching time slot. 
$(".saveBtn").click(function(event) {
    event.preventDefault();
    
    let slot = $(event.target).parent().parent().attr("id");
    let task = $(event.target).parent().prev().children().val();
    
    console.log(task);
    console.log(slot);

    localStorage.setItem(slot,task);

    renderLastRegistered();
}

    

)