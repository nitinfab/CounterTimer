var monthArray = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var button = document.getElementById("ok");
defaultCurrentDate();
var stringDate;

button.addEventListener('click', function(){
    var input = document.getElementById("dateInput").value;
    var inputClassify = input.split("-");
    var year = parseInt(inputClassify[0]);
    var month = monthArray[parseInt(inputClassify[1]) - 1];
    var date = parseInt(inputClassify[2]);

    stringDate = month + " " + date + ", " + year;

    countDownDate = new Date(stringDate).getTime();
});

var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    var secondCountdown = (days * 24 * 60 * 60) + (hours * 60 * 60) + (minutes * 60) + seconds;
    
    document.getElementById("result").innerHTML = secondCountdown;
    
    if (distance < 0) {
        document.getElementById("result").innerHTML = "0";
    }
}, 1000);

//default value in input form
function defaultCurrentDate(){
    let today = new Date();
    let yyyy = today.getFullYear();
    let mm = today.getMonth()+1;
    let dd = today.getDate()+1;

    dd = (dd < 10 ? '0' + dd : dd);
    mm = (mm < 10 ? '0' + mm : mm);

    document.getElementById("dateInput").value = yyyy + "-" + mm + "-" + dd;
}