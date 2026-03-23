let current=1;

const bg=document.getElementById('bgMusic');
const voice=document.getElementById('voice');

/* PAGE */
function showPage(n){
document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
document.getElementById('page'+n).classList.add('active');
current=n;
}

function nextPage(){
if(current===5)return;
showPage(current+1);
}

/* PASSWORD */
function checkPassword(){
if(document.getElementById('password').value==='2006.10.09'){
bg.play();
showPage(2);
startQuotes();
}else alert('Try again Ammi 💕');
}

/* QUOTES */
const lines=[
"Ammi... ❤️",
"You are my whole world... 🌍",
"මගේ ජීවිතේ ලොකුම ශක්තිය ඔයා... 💘",
"You sacrificed everything... 💋",
"You never gave up on me... ✨",
"You made me who I am today... ❤️‍🔥",
"I am nothing without you... ❤️‍🩹",
"You are my strength... 🤍",
"You are my happiness... 😁",
"You are my safe place...☕️",
"I love you more than anything... 💗",
"You deserve everything... ❤️",
"I will always protect you... 🥺💋",
"I will always be your son... 🌏💕",
"I love you forever 😭❤️"
];

function startQuotes(){
let box=document.getElementById('quotes');
box.innerHTML='';
lines.forEach((t,i)=>{
setTimeout(()=>{
let p=document.createElement('p');
p.textContent=t;
box.appendChild(p);
},i*700);
});
}

/* CAKE + FIREWORKS */
function celebrateCake(){
document.getElementById('playBtn').style.display='block';
createFireworks();
}

function createFireworks(){
const container=document.getElementById('fireworks');
for(let i=0;i<30;i++){
let div=document.createElement('div');
div.style.position='absolute';
div.style.left=Math.random()*100+'%';
div.style.top=Math.random()*100+'%';
div.style.width='5px';
div.style.height='5px';
div.style.background='yellow';
div.style.animation='explode 1s ease';
container.appendChild(div);
setTimeout(()=>div.remove(),1000);
}
}

/* VOICE */
function playVoice(){
let currentTime=bg.currentTime;
bg.pause();

voice.play();

voice.onended=()=>{
bg.currentTime=currentTime;
bg.play();
};
}

/* GIFT */
function openGift(){
document.getElementById('card').style.display='block';
}

/* HEARTS */
const hearts=document.querySelector('.hearts');
for(let i=0;i<25;i++){
let span=document.createElement('span');
span.style.left=Math.random()*100+'%';
hearts.appendChild(span);
}
