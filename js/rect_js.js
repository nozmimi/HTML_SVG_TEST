document.getElementById("svg_change").addEventListener("click", function(){
    var x = document.getElementById("svg_height").value * 10 * 2;
    var y = document.getElementById("svg_width").value * 10;
    console.log(x,y);

        var totebag1_inside = document.getElementById("totobag1_inside");
        totebag1_inside.setAttribute("height", x);
        totebag1_inside.setAttribute("width", y);
    
        var totebag1_outside = document.getElementById("totobag1_outside");
        totebag1_outside.setAttribute("height", x + 20);
        totebag1_outside.setAttribute("width", y + 20 );    

    }, true);
