let current=1;

const bg=document.getElementById('bgMusic');
const voice=document.getElementById('voice');
const nextBtn=document.getElementById('nextBtn');

/* PAGE */
function showPage(n){
document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
document.getElementById('page'+n).classList.add('active');
current=n;

// hide menu in page 1
if(n === 1){
document.querySelector('.menu-btn').style.display = "none";
}else{
document.querySelector('.menu-btn').style.display = "flex";
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

for(let i=0;i<10;i++){

setTimeout(()=>{
let rocket=document.createElement('div');
rocket.className='rocket';

rocket.style.left=Math.random()*100+'%';

document.body.appendChild(rocket);

// explode after reaching top
setTimeout(()=>{
createExplosion(rocket.offsetLeft, 200);
rocket.remove();
},800);

},i*300);

}
}

function createExplosion(x,y){

for(let i=0;i<30;i++){
let p=document.createElement('div');
p.className='particle';

p.style.left=x+'px';
p.style.top=y+'px';

let angle=Math.random()*2*Math.PI;
let distance=Math.random()*120;

let dx=Math.cos(angle)*distance;
let dy=Math.sin(angle)*distance;

p.animate([
{transform:'translate(0,0)',opacity:1},
{transform:`translate(${dx}px,${dy}px)`,opacity:0}
],{
duration:1000,
easing:'ease-out'
});

document.body.appendChild(p);

setTimeout(()=>p.remove(),1000);
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
