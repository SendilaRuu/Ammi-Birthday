let currentPage = 1;

const bgMusic = document.getElementById("bgMusic");
const voice = document.getElementById("voice");

function showPage(n){
document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));
document.getElementById("page"+n).classList.add("active");
currentPage = n;
}

function nextPage(){
let next = currentPage + 1;
if(next > 5) next = 1;
showPage(next);
}

function checkPassword(){
let input = document.getElementById("password").value;

if(input === "2006.10.09"){
bgMusic.play(); // start music after interaction
showPage(2);
}else{
alert("Try again Ammi 💕");
}
}

function lightCake(){
document.querySelector(".cake").textContent = "🕯️🎂";
document.getElementById("playBtn").style.display = "block";
}

function playVoice(){
bgMusic.pause();
voice.play();

document.getElementById("afterMsg").innerText =
"I love you so much Ammi ❤️";
}

function openGift(){
document.getElementById("card").style.display = "block";
}
