let tablinks = document.querySelectorAll(".tab-links");
let contents = document.querySelectorAll(".contents");
let close = document.querySelector("#close");
let open = document.querySelector("#open");
let menu = document.querySelector("#menu");
open.onclick = function(){
    menu.style.right = "0";
}
close.onclick = function() {
    menu.style.right = "-40%";
}
function opentab(tabName, linksname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(content of contents){
        content.classList.remove("active-tab");
    }
    document.getElementById(linksname).classList.add("active-link");
  document.getElementById(tabName).classList.add("active-tab");
}



