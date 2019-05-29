var d = new Date();

var day = d.getDay();
var hour = d.getHours();




if (day >= 1 && day <= 5 && hour >= 8 && hour <= 19) {
    document.getElementById("openclose").insertAdjacentHTML("beforeend", "geopend");

} else if (day >= 6 && day <= 7 && hour >= 9 && hour <= 19) {
    document.getElementById("openclose").insertAdjacentHTML("beforeend", "geopend");

} else {
    document.getElementById("openclose").insertAdjacentHTML("beforeend", "gesloten");
}



var time = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();

var timehour = d.getHours() + ":00";

document.getElementById("LiveClock").insertAdjacentHTML("beforeend", time);


function changeClosingTime(){

    document.getElementById("closingTime").innerHTML=timehour;
}

