function change(n){
    if (n==1){
        document.getElementById("img1").style.display="block";
        document.getElementById("img2").style.display="none";
        document.getElementById("img3").style.display="none";
        document.getElementById("dot2").style.backgroundColor = "#959DAF";
        document.getElementById("dot1").style.backgroundColor = "#011640";
        document.getElementById("dot3").style.backgroundColor = "#959DAF";
    }
    if (n==2){
        document.getElementById("img1").style.display="none";
        document.getElementById("img2").style.display="block";
        document.getElementById("img3").style.display="none";
        document.getElementById("dot1").style.backgroundColor = "#959DAF";
        document.getElementById("dot2").style.backgroundColor = "#011640";
        document.getElementById("dot3").style.backgroundColor = "#959DAF";
    }
    if (n==3){
        document.getElementById("img2").style.display="none";
        document.getElementById("img3").style.display="block";
        document.getElementById("img1").style.display="none";
        document.getElementById("dot1").style.backgroundColor = "#959DAF";
        document.getElementById("dot2").style.backgroundColor = "#959DAF";
        document.getElementById("dot3").style.backgroundColor = "#011640";
    }
}