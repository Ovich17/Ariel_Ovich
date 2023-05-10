var x = 5;
var y = 4;
let z = 2;

console.log(x+y);

var d = new Date();
console.log(d);

var year = d.getFullYear();
console.log(year);

document.getElementById("greetingH1").innerHTML = year;

var Alon = {
    age : 21,
    family : "Levy",
    time : new Date()
};

console.log(Alon.time);

var H = d.getHours();
console.log(H);


if (H < 6){
    document.getElementById("greeting2").innerHTML = "ZZZZ"
} 
else if (H<12){
    document.getElementById("greeting2").innerHTML = "Good Morning"
    document.getElementById("body").classList.remove("NightStyle")
}
else if (H<16){
    document.getElementById("greeting2").innerHTML = "Good Afternoon"
}
else if (H<20){
    document.getElementById("greeting2").innerHTML = "Good Evening"
    document.getElementById("body").classList.add("NightStyle")
}
else{
    document.getElementById("greeting2").innerHTML = "Good Night"
}

function TimeFunc(){
    document.getElementById("Time").innerHTML = d;
    document.getElementById("btn").innerHTML = "That's it";
}

var cars = ["madza", "volvo", "ferrari", "mazerati", "lambo"];
console.log(cars[4]);
var l = cars.length;
console.log(cars[l-1]);

for (let i = 0; i < cars.length; i++) {
    var text = "";
    text += cars[i];
    console.log(text);
}


var rotation = 90;
function Spinner(){
    document.getElementById("task").style.transform = "rotate("+rotation+"deg)";
    rotation += 90;

}



