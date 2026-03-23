let current=1;

const bg=document.getElementById('bgMusic');
const voice=document.getElementById('voice');
const nextBtn=document.getElementById('nextBtn');

/* PAGE */
function showPage(n){
document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
document.getElementById('page'+n).classList.add('active');
current=n;

/* hide next button page1 & 5 */
if(n===1 || n===5){
nextBtn.style.display='none';
}else{
nextBtn.style.display='block';
}
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
}
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

/* REAL FIREWORK */
function celebrateCake(){
document.getElementById('playBtn').style.display='block';

for(let i=0;i<5;i++){
setTimeout(launchFirework,i*300);
}
}

function launchFirework(){
let rocket=document.createElement('div');

rocket.style.position='fixed';
rocket.style.bottom='0';
rocket.style.left=Math.random()*100+'%';
rocket.style.width='3px';
rocket.style.height='20px';
rocket.style.background='white';

document.body.appendChild(rocket);

let target=window.innerHeight/2;

let move=setInterval(()=>{
rocket.style.bottom=(parseInt(rocket.style.bottom)+10)+'px';

if(parseInt(rocket.style.bottom)>=target){
clearInterval(move);
explode(rocket);
rocket.remove();
}
},20);
}

function explode(origin){
for(let i=0;i<40;i++){
let p=document.createElement('div');
p.className='particle';

p.style.left=origin.offsetLeft+'px';
p.style.bottom=origin.style.bottom;

p.style.background=`hsl(${Math.random()*360},100%,50%)`;

document.body.appendChild(p);

let x=(Math.random()-0.5)*300;
let y=(Math.random()-0.5)*300;

p.animate([
{transform:'translate(0,0)',opacity:1},
{transform:`translate(${x}px,${y}px)`,opacity:0}
],{duration:1000});

setTimeout(()=>p.remove(),1000);
}
}

/* VOICE */
function playVoice(){
let t=bg.currentTime;
bg.pause();
voice.play();
voice.onended=()=>{
bg.currentTime=t;
bg.play();
};
}

/* GIFT */
function openGift(){
document.getElementById('card').style.display='block';
}

/* HEARTS */
const hearts=document.querySelector('.hearts');
for(let i=0;i<30;i++){
let h=document.createElement('span');
h.style.left=Math.random()*100+'%';
h.style.top=Math.random()*100+'%';
h.style.animationDuration=(5+Math.random()*5)+'s';
hearts.appendChild(h);
}
