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

bg.volume = 0;
bg.play().then(()=>{
/* smooth fade in */
let v=0;
let fade=setInterval(()=>{
v+=0.05;
bg.volume=v;
if(v>=1) clearInterval(fade);
},200);
}).catch(()=>{});

showPage(2);
startQuotes();

}else{
alert('Try again Ammi 💕');
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

/* launch MANY fireworks */
for(let i=0;i<10;i++){
setTimeout(launchFirework,i*200);
}
}

function launchFirework(){
let rocket=document.createElement('div');

rocket.style.position='fixed';
rocket.style.bottom='0';
rocket.style.left=Math.random()*100+'%';
rocket.style.width='4px';
rocket.style.height='25px';
rocket.style.background='white';
rocket.style.borderRadius='2px';

document.body.appendChild(rocket);

let target=window.innerHeight/2 + Math.random()*150;

let move=setInterval(()=>{
rocket.style.bottom=(parseInt(rocket.style.bottom)+12)+'px';

if(parseInt(rocket.style.bottom)>=target){
clearInterval(move);
explode(rocket);
rocket.remove();
}
},16);
}

function explode(origin){

for(let i=0;i<80;i++){  // MORE PARTICLES 🔥
let p=document.createElement('div');
p.className='particle';

p.style.left=origin.offsetLeft+'px';
p.style.bottom=origin.style.bottom;

p.style.background=`hsl(${Math.random()*360},100%,60%)`;

document.body.appendChild(p);

let x=(Math.random()-0.5)*400;
let y=(Math.random()-0.5)*400;

p.animate([
{transform:'translate(0,0)',opacity:1},
{transform:`translate(${x}px,${y}px)`,opacity:0}
],{
duration:1200,
easing:'ease-out'
});

setTimeout(()=>p.remove(),1200);
}
}

/* VOICE */
function playVoice(){
let t=bg.currentTime;

bg.pause();
voice.currentTime = 0;
voice.play();

voice.onended=()=>{
bg.currentTime = t;
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

function toggleMenu(){
let menu=document.getElementById('menu');
menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
}

function goToPage(n){
showPage(n);
document.getElementById('menu').style.display='none';
}
