


const ToggelON = () => {

    let mobilemenu = document.querySelector(".mobile-menu")



    if (mobilemenu.style.visibility === "hidden") {
        mobilemenu.style.visibility = "visible"
        mobilemenu.style.transform = " scale(1)"
    }
    else {
        mobilemenu.style.visibility = "hidden"
        mobilemenu.style.transform = " scale(0.1)"


    }



}

const withDrawbtn = document.getElementById("withDraw")
const depositebtn = document.getElementById("deposite")
const buy = document.getElementById("buy")
const sell = document.getElementById("sell")

const deposite = ()=>{
    withDrawbtn.style.display= "none"
    depositebtn.style.display= "block"
    console.log("HIt");

}

const withDraw = ()=>{
    withDrawbtn.style.display= "block"
    depositebtn.style.display= "none"

}

const buyShow = ()=>{
    buy.style.display= "block"
    sell.style.display= "none"
    console.log("HIt");

}

const sellShow = ()=>{
    buy.style.display= "none"
    sell.style.display= "block"
    console.log("HIt");

}


const modalOpen = ()=>{
    alert("hello")
    console.log("sas");

}


const hour = document.getElementById("hour")
const min = document.getElementById("min")
const sec = document.getElementById("sec")






// var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();

// // Update the count down every 1 second
// var x = setInterval(function() {

//   // Get today's date and time
//   var now = new Date().getTime();

//   // Find the distance between now and the count down date
//   var distance = countDownDate - now;

//   // Time calculations for days, hours, minutes and seconds
// //   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   var seconds = Math.floor((distance % (1000 * 60)) / 1000);

//   // Display the result in the element with id="demo"
//   document.getElementById("timer").innerHTML =  hours + "h "
//   + minutes + "m " + seconds + "s ";

//   // If the count down is finished, write some text
//   if (distance < 0) {
//     clearInterval(x);
//     document.getElementById("timer").innerHTML = "EXPIRED";
//   }
// }, 1000);




var date;
var display = document.getElementById('timer');
setInterval(function(){
    date = new Date();
    var currenthours = date.getHours();
    var hours;
    var minutes;
    var secondes;
    if (currenthours != 23){
        if (currenthours < 23)
            hours = 23 - currenthours;
        else hours = 23 + (23 - currenthours);
        minutes = 60 - date.getMinutes();
        secondes = 60 - date.getSeconds();
    display.innerHTML = hours + 'h: ' + minutes + 'm: ' +secondes + 's';
    }
    else display.innerHTML = 'LIVE NOW';


},1000);