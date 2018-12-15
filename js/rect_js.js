document.getElementById("svg_change").addEventListener("click", function(){
    var x = document.getElementById("svg_height").value * 10 * 2;
    var y = document.getElementById("svg_width").value * 10;
    console.log(x,y);

    var totebag = document.getElementById("tote_bag1");
    totebag.setAttribute("fill", "#ff69b4"); // 緑色で塗りつぶす
    totebag.setAttribute("stroke", "#dc143c");    // 青色の線にする
    totebag.setAttribute("height", x);
    totebag.setAttribute("width", y);
    }, true);
