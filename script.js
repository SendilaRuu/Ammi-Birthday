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
if(current === 5) return;
showPage(current+1);
}

/* PASSWORD */
function checkPassword(){
if(document.getElementById('password').value==='2006.10.09'){
fadeInMusic();
showPage(2);
startQuotes();
}else alert('Try again Ammi 💕');
}

/* MUSIC */
function fadeInMusic(){
bg.volume=0;
bg.play();
let v=0;
let i=setInterval(()=>{
v+=0.05;
bg.volume=v;
if(v>=1) clearInterval(i);
},200);
}

function fadeOutMusic(){
let v=bg.volume;
let i=setInterval(()=>{
v-=0.05;
bg.volume=v;
if(v<=0){bg.pause();clearInterval(i);}
},200);
}

/* QUOTES */
const lines=[
"Ammi... ❤️",
"You are my whole world...",
"මගේ ජීවිතේ ලොකුම ශක්තිය ඔයා...",
"You sacrificed everything...",
"You never gave up on me...",
"You made me who I am today...",
"I am nothing without you...",
"You are my strength...",
"You are my happiness...",
"You are my safe place...",
"I love you more than anything...",
"You deserve everything...",
"I will always protect you...",
"I will always be your son...",
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

/* CAKE */
function lightCake(){
document.getElementById('flame').style.display='block';
document.getElementById('playBtn').style.display='block';
}

/* VOICE */
function playVoice(){
fadeOutMusic();
voice.play();
voice.onended=()=>fadeInMusic();
}

/* GIFT */
function openGift(){
document.getElementById('gift').classList.add('open');
document.getElementById('card').style.display='block';
}

/* HEARTS */
const hearts=document.querySelector('.hearts');
for(let i=0;i<30;i++){
let span=document.createElement('span');
span.style.left=Math.random()*100+'%';
span.style.animationDuration=(5+Math.random()*5)+'s';
hearts.appendChild(span);
}
