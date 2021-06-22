

let link1 = document.getElementById("bookmark1");
let link2 = document.getElementById("bookmark2");
let link3 = document.getElementById("bookmark3");
let link4 = document.getElementById("bookmark4");

link1.onclick = function() {
    window.open("https://www.google.com/", "_self");
}

link2.onclick = function() {
    window.open("https://mail.google.com/", "_self");
}

link3.onclick = function() {
    window.open("https://drive.google.com/", "_self");
}

link4.onclick = function() {
    window.open("https://calendar.google.com/", "_self");
}