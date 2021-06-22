// whether each column is locked or not 

const column1 = {
    locked: false
}
const column2 = {
    locked: false
}
const column3 = {
    locked: false
}
const column4 = {
    locked: false
}

// begins with preset colour combination 

let div1 = document.getElementById("colour1");
let div2 = document.getElementById("colour2");
let div3 = document.getElementById("colour3");
let div4 = document.getElementById("colour4");
let purpleSet = ["#EADCEC", "#BDA3C9", "#A787B6", "#6B497A"];

div1.style.backgroundColor = purpleSet[0];
div1.innerText = purpleSet[0];

div2.style.backgroundColor = purpleSet[1];
div2.innerText = purpleSet[1];

div3.style.backgroundColor = purpleSet[2];
div3.innerText = purpleSet[2];

div4.style.backgroundColor = purpleSet[3];
div4.innerText = purpleSet[3];

// selects & locks column

div1.onclick = function() {
    if (column1.locked === false) {
        column1.locked = true;
        div1.style.opacity = 0.5;
    } else if (column1.locked === true) {
        column1.locked = false;
        div1.style.opacity = 1.0;
    }
    
}

div2.onclick = function() {
    if (column2.locked === false) {
        column2.locked = true;
        div2.style.opacity = 0.5;
    } else if (column2.locked === true) {
        column2.locked = false;
        div2.style.opacity = 1.0;
    }
    
}

div3.onclick = function() {
    if (column3.locked === false) {
        column3.locked = true;
        div3.style.opacity = 0.5;
    } else if (column3.locked === true) {
        column3.locked = false;
        div3.style.opacity = 1.0;
    }
    
}

div4.onclick = function() {
    if (column4.locked === false) {
        column4.locked = true;
        div4.style.opacity = 0.5;
    } else if (column4.locked === true) {
        column4.locked = false;
        div4.style.opacity = 1.0;
    }
    
}

// convert RBG values into hex values 

function componentToHex(i) {
    let hex = i.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }

// convert RGB/Hex to HSL Colour Notation

// function rgbToHsl(r, g, b){
//     r /= 255.0, g /= 255.0, b /= 255.0;
//     var max = Math.max(r, g, b), min = Math.min(r, g, b);
//     var h, s, l = (max + min) / 2.0;

//     if(max == min){
//         h = s = 0; // achromatic
//     }else{
//         var d = max - min;
//         s = l > 0.5 ? d / (2.0 - max - min) : d / (max + min);
//         switch(max){
//             case r: h = (g - b) / d + (g < b ? 6.0 : 0); break;
//             case g: h = (b - r) / d + 2.0; break;
//             case b: h = (r - g) / d + 4.0; break;
//         }
//         h /= 6.0;
//     }

//     return [h, s, l];
// }

function rgbToHsl(r, g, b) {
    var a, add, b, diff, g, h, hue, l, lum, max, min, r, s, sat;
    r = parseFloat(r) / 255;
    g = parseFloat(g) / 255;
    b = parseFloat(b) / 255;
    max = Math.max(r, g, b);
    min = Math.min(r, g, b);
    diff = max - min;
    add = max + min;
    hue = min === max ? 0 : r === max ? ((60 * (g - b) / diff) + 360) % 360 : g === max ? (60 * (b - r) / diff) + 120 : (60 * (r - g) / diff) + 240;
    lum = 0.5 * add;
    sat = lum === 0 ? 0 : lum === 1 ? 1 : lum <= 0.5 ? diff / add : diff / (2 - add);
    h = Math.round(hue);
    s = Math.round(sat * 100);
    l = Math.round(lum * 100);
    a = 1;
    return [h, s, l, a];
  }

// with HSL if L > 50%, set bg colour of bookmark to 30%
// if L < 50%, set bg colour of bookmark to 70%

let bookmark1 = document.getElementById("bookmark1");
let bookmark2 = document.getElementById("bookmark2");
let bookmark3 = document.getElementById("bookmark3");
let bookmark4 = document.getElementById("bookmark4");

// refresh all unlocked columns, adjust bookmark bg colour accordingly

let refresh = document.getElementById("refresh");
refresh.onclick = function() {
    if (column1.locked === false) {
        newColour = randomColour();
        newRGB = `rgb(${newColour[0]}, ${newColour[1]}, ${newColour[2]})`
        newHex = rgbToHex(newColour[0], newColour[1], newColour[2]);
        div1.style.backgroundColor = newRGB;
        div1.innerText = newHex; 
        
        newHSL = rgbToHsl(newColour[0], newColour[1], newColour[2]);
        if (newHSL[2] < 50) {
            bookmark1.style.backgroundColor = `hsl(${newHSL[0]}, ${newHSL[1]}%, 70%)`;
        } else {
            bookmark1.style.backgroundColor = `hsl(${newHSL[0]}, ${newHSL[1]}%, 30%)`;
        }
    }
    if (column2.locked === false) {
        newColour = randomColour();
        newRGB = `rgb(${newColour[0]}, ${newColour[1]}, ${newColour[2]})`
        newHex = rgbToHex(newColour[0], newColour[1], newColour[2]);
        div2.style.backgroundColor = newRGB;
        div2.innerText = newHex;      
        
        newHSL = rgbToHsl(newColour[0], newColour[1], newColour[2]);
        if (newHSL[2] < 50) {
            bookmark2.style.backgroundColor = `hsl(${newHSL[0]}, ${newHSL[1]}%, 80%)`;
        } else {
            bookmark2.style.backgroundColor = `hsl(${newHSL[0]}, ${newHSL[1]}%, 40%)`;
        }
    }
    if (column3.locked === false) {
        newColour = randomColour();
        newRGB = `rgb(${newColour[0]}, ${newColour[1]}, ${newColour[2]})`
        newHex = rgbToHex(newColour[0], newColour[1], newColour[2]);
        div3.style.backgroundColor = newRGB;
        div3.innerText = newHex;      
        
        newHSL = rgbToHsl(newColour[0], newColour[1], newColour[2]);
        if (newHSL[2] < 50) {
            bookmark3.style.backgroundColor = `hsl(${newHSL[0]}, ${newHSL[1]}%, 70%)`;
        } else {
            bookmark3.style.backgroundColor = `hsl(${newHSL[0]}, ${newHSL[1]}%, 30%)`;
        }
    }
    if (column4.locked === false) {
        newColour = randomColour();
        newRGB = `rgb(${newColour[0]}, ${newColour[1]}, ${newColour[2]})`
        newHex = rgbToHex(newColour[0], newColour[1], newColour[2]);
        div4.style.backgroundColor = newRGB;
        div4.innerText = newHex; 
        
        newHSL = rgbToHsl(newColour[0], newColour[1], newColour[2]);
        if (newHSL[2] < 50) {
            bookmark4.style.backgroundColor = `hsl(${newHSL[0]}, ${newHSL[1]}%, 70%)`;
        } else {
            bookmark4.style.backgroundColor = `hsl(${newHSL[0]}, ${newHSL[1]}%, 30%)`;
        }
    }

}

// generate random 3 number array for rgb values
function randomColour() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return [r, g, b];
}

