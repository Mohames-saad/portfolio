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
    const reveals = document.querySelectorAll('.reveal');
    const windowheigth = window.innerHeight;
    
    for(let i = 0; i < reveals.length; i++){
        const revealTop = reveals[i].getBoundingClientRect().top;
        if(revealTop < windowheigth - 100){
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');
        }
    }
    const revealX =document.querySelector('.revealX');
    const revealTopX = revealX.getBoundingClientRect().top;
    if(revealTopX < windowheigth - 100){
        revealX.classList.add('active');
    }
    else{
        revealX.classList.remove('active');
    }
}
window.addEventListener('load',()=>{
    document.querySelector('.detel').classList.add('active');
    document.querySelector('.img').classList.add('active');
})