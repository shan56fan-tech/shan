/* PAGE TRANSITION */

function showLoader(){

document.getElementById("loader").style.display="flex";

}

function goNext(){

showLoader();

setTimeout(function(){

window.location.href="gallery.html";

},1200);

}

function goMessage(){

showLoader();

setTimeout(function(){

window.location.href="message.html";

},1200);

}

/* GALLERY */

let images=[
"WhatsApp1.jpeg",
"WhatsApp2.jpeg",
"WhatsApp3.jpeg",
"WhatsApp4.jpeg",
"WhatsApp5.jpeg",
"WhatsApp6.jpeg"
];

let i=0;

function next(){

i++;

if(i>=images.length){
i=0;
}

document.getElementById("gallery").src=images[i];

}

function prev(){

i--;

if(i<0){
i=images.length-1;
}

document.getElementById("gallery").src=images[i];

}

/* RANDOM BACKGROUND ELEMENTS */

const bg=document.querySelector(".background");

if(bg){

for(let i=0;i<25;i++){

let el=document.createElement("span");

let symbols=["❤","🌸"];

el.innerHTML=symbols[Math.floor(Math.random()*symbols.length)];

el.style.left=Math.random()*100+"%";
el.style.animationDuration=(5+Math.random()*10)+"s";
el.style.fontSize=(15+Math.random()*25)+"px";

bg.appendChild(el);

}

}