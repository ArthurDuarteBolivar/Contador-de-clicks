var currentNumberWrapper = document.getElementById("currentNumber")
var currentNumber = 0
function increment(){
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
    if (currentNumber == 10){
    alert("Voce chegou ate 10");
}
}
function decrement(){
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    if (currentNumber == -10){
    alert("Voce chegou ate -10");
}
}


 // Set the date we're counting down to var countDownDate = new Date("April 25, 2023 12:00:00").getTime();
 // Update the count down every 1 second var x = setInterval(function() { // Get todays date and time var now = new Date().getTime();
 // Find the distance between now an the count down date var distance = countDownDate - now;
 // Time calculations for days, hours, minutes and seconds var days = Math.floor(distance / (1000 * 60 * 60 * 24)); var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
 var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
 var seconds = Math.floor((distance % (1000 * 60)) / 1000);
 // Display the result in the element with id="demo" document.getElementById("dday").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
 // If the count down is finished, write some text if (distance < 0) { clearInterval(x); document.getElementById("dday").innerHTML = "SITE NA TEIA"; } }, 1000);




