var hide1 = document.querySelector(".footer-hide1")
var hide2 = document.querySelector(".footer-hide2")
var hide3 = document.querySelector(".footer-hide3")

var showbtn1 = document.querySelector(".show-btn-1")
var showbtn2 = document.querySelector(".show-btn-2")
var showbtn3 = document.querySelector(".show-btn-3")

var hidebtn1 = document.querySelector(".hide-btn-1")
var hidebtn2 = document.querySelector(".hide-btn-2")
var hidebtn3 = document.querySelector(".hide-btn-3")

var openBtn = document.querySelector("#burger-btn")
var hideBtn = document.querySelector("#burger-close")
var burgerMenu = document.querySelector(".burger-menu")

function show1() {
    hide1.style.display = "block";
    showbtn1.style.display = "none";
    hidebtn1.style.display = "block";
}

function show2() {
    hide2.style.display = "block";
    showbtn2.style.display = "none";
    hidebtn2.style.display = "block";
}

function show3() {
    hide3.style.display = "block";
    showbtn3.style.display = "none";
    hidebtn3.style.display = "block";
}

function delete1() {
    hide1.style.display = "none";
    hidebtn1.style.display = "none";
    showbtn1.style.display = "block";
}

function delete2() {
    hide2.style.display = "none";
    hidebtn2.style.display = "none";
    showbtn2.style.display = "block";
}

function delete3() {
    hide3.style.display = "none";
    hidebtn3.style.display = "none";
    showbtn3.style.display = "block";
}

function burgerShow() {
    burgerMenu.style.display = "block";
    openBtn.style.display = "none";
    hideBtn.style.display = "block";
}

function burgerHide() {
    burgerMenu.style.display = "none";
    openBtn.style.display = "block";
    hideBtn.style.display = "none";
}

function closeAll() {
    burgerMenu.style.display = "none";
    openBtn.style.display = "block";
    hideBtn.style.display = "none";
}