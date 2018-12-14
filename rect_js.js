document.getElementById("svg_change").addEventListener("click", function(){
var x = document.getElementById("svg_height").value;
var y = document.getElementById("svg_width").value;
    console.log(x,y);

var poly = document.getElementById("testRect");
    console.log(poly)
    poly.setAttribute("fill", "#ff69b4"); // 緑色で塗りつぶす
    poly.setAttribute("stroke", "#dc143c");    // 青色の線にする
    poly.setAttribute("height", x);
    poly.setAttribute("width", y);
    }, true);
