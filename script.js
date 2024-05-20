
    var greeting;
    var username = "David William";

function clock(){
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();

    if(h < 12 ){
        greeting = "Bom dia";
    }else if(h < 18){
        greeting = "Boa tarde";
    }else {
        greeting = "Boa noite";
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    var time = h + ":" + m + ":" + s

    document.getElementsByClassName("clock_numbers")[0].innerText = time;
    document.getElementsByClassName("clock_text")[0].innerText = greeting + ", " + username + "!";
    setTimeout(clock, 1000);
}

var colorArray = ["white", "springgreen", "#ff4649","#ffef3d", "purple"];
var num = 0; //current color

function changeColor(){
    document.getElementsByClassName("clock_display")[0].style.color = colorArray[num];
    if (num + 1 < colorArray.length){
        num += 1;
    } else {
        num = 0;
    }
}

clock();