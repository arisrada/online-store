// navbar color change

window.addEventListener('scroll', function() {
    if (window.scrollY > 20) {
        document.getElementById("navbar").style.backgroundColor = "rgb(250, 250, 250, 0.9)";
        document.getElementById("navbar").style.height = "100px";
        document.getElementById("navbar").style.boxShadow = "2px 2px 10px rgb(216, 213, 213)";
    }
    else {
        document.getElementById("navbar").style.backgroundColor = "#F9F5F2";
        document.getElementById("navbar").style.boxShadow = "1px 1px rgb(216, 213, 213)";
        document.getElementById("navbar").style.height = "130px";
    }
});

function myFunction1() {
    document.getElementById("ques1").style.display = "block";
    document.getElementById("ques2").style.display = "none";
    document.getElementById("ques3").style.display = "none";
    document.getElementById("ques4").style.display = "none";
    document.getElementById("ques5").style.display = "none";
}
function myFunction2() {
    document.getElementById("ques1").style.display = "none";
    document.getElementById("ques2").style.display = "block";
    document.getElementById("ques3").style.display = "none";
    document.getElementById("ques4").style.display = "none";
    document.getElementById("ques5").style.display = "none";
}
function myFunction3() {
    document.getElementById("ques1").style.display = "none";
    document.getElementById("ques2").style.display = "none";
    document.getElementById("ques3").style.display = "block";
    document.getElementById("ques4").style.display = "none";
    document.getElementById("ques5").style.display = "none";
}
function myFunction4() {
    document.getElementById("ques1").style.display = "none";
    document.getElementById("ques2").style.display = "none";
    document.getElementById("ques3").style.display = "none";
    document.getElementById("ques4").style.display = "block";
    document.getElementById("ques5").style.display = "none";
}
function myFunction5() {
    document.getElementById("ques1").style.display = "none";
    document.getElementById("ques2").style.display = "none";
    document.getElementById("ques3").style.display = "none";
    document.getElementById("ques4").style.display = "none";
    document.getElementById("ques5").style.display = "block";
}