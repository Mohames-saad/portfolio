const tablinks = document.querySelectorAll(".tab-links");
const contents = document.querySelectorAll(".contents");
const close = document.querySelector("#close");
const open = document.querySelector("#open");
const menu = document.querySelector("#menu");
const skill = document.getElementById('skill');
const skilldesc = document.getElementById('skills');
const edu = document.getElementById('edu');
const education = document.getElementById('education');
open.onclick = function(){
    menu.style.right = "0";
}
close.onclick = function() {
    menu.style.right = "-40%";
}
skill.addEventListener( "click", () => {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (content of contents) {
        content.classList.remove("active-tab");
    }
    skill.classList.add("active-link");
    skilldesc.classList.add("active-tab");
}
)
edu.addEventListener( "click", () => {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (content of contents) {
        content.classList.remove("active-tab");
    }
    edu.classList.add("active-link");
    education.classList.add("active-tab");
}
)

window.addEventListener('scroll',reveal);

function reveal(){
    var reveals = document.querySelectorAll('.reveal');
    for(var i = 0; i < reveals.length; i++){
        var windowheith = window.innerHeight;
        var revealPoint = 100;
        var revealTop = reveals[i].getBoundingClientRect().top;
        if(revealTop < windowheith - revealPoint){
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');
        }
    }
}