const $=(s,c=document)=>c.querySelector(s), $$=(s,c=document)=>[...c.querySelectorAll(s)];
const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;

const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.12});
$$('.reveal').forEach(el=>observer.observe(el));

const tilt=$('[data-tilt]');
if(tilt&&!reduced){tilt.addEventListener('mousemove',e=>{const r=tilt.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;tilt.style.transform=`perspective(1000px) rotateX(${-y*3}deg) rotateY(${x*4}deg)`});tilt.addEventListener('mouseleave',()=>tilt.style.transform='')}

$$('.choice-grid button').forEach(btn=>btn.addEventListener('click',()=>{const group=btn.closest('.choice-grid');$$('button',group).forEach(x=>x.classList.remove('selected'));btn.classList.add('selected')}));

const deployButton=$('#deployButton'),progress=$('#deploymentProgress'),success=$('#deploymentSuccess');
const deploySteps=['Preparing infrastructure','Configuring network','Deploying workload','Configuring SSL','Connecting monitoring','Running health checks'];
let deploymentTimer;
function runDeployment(){progress.classList.add('active');const list=$('ul',progress),bar=$('.progress-track i',progress),pct=$('#progressPercent');list.innerHTML=deploySteps.map(x=>`<li>${x}</li>`).join('');let i=0;bar.style.width='0';pct.textContent='0%';const advance=()=>{if(i>0)list.children[i-1].className='done';if(i===deploySteps.length){bar.style.width='100%';pct.textContent='100%';setTimeout(()=>{progress.classList.remove('active');success.classList.add('active')},500);return}list.children[i].className='running';const value=Math.round(((i+.45)/deploySteps.length)*100);bar.style.width=value+'%';pct.textContent=value+'%';i++;deploymentTimer=setTimeout(advance,reduced?50:620)};advance()}
deployButton?.addEventListener('click',runDeployment);$('#deployAgain')?.addEventListener('click',()=>{clearTimeout(deploymentTimer);success.classList.remove('active')});

$('#advancedToggle')?.addEventListener('click',()=>$('#kubeUi').classList.toggle('advanced'));

const incidents=[
  {title:'CPU overload',action:'scale',node:'.api'},
  {title:'Pod crashed',action:'restart',node:'.node2'},
  {title:'Disk almost full',action:'storage',node:'.db'},
  {title:'Database unavailable',action:'failover',node:'.db'},
  {title:'Certificate expiring',action:'renew',node:'.lb'},
  {title:'Traffic spike',action:'block',node:'.lb'}
];
let playing=false,current=null,score=0,health=92,round=0,incidentTimeout;
const game={status:$('#gameStatus'),health:$('#healthValue'),bar:$('#healthBar'),score:$('#scoreValue'),uptime:$('#uptimeValue'),pop:$('#incidentPop'),title:$('#incidentTitle'),message:$('#gameMessage'),start:$('#startGame')};
function updateGame(){game.health.textContent=health+'%';game.bar.style.width=health+'%';game.score.textContent=score.toLocaleString();game.uptime.textContent=(99.90+health/1200).toFixed(2)+'%'}
function clearAffected(){$$('.game-node').forEach(n=>n.classList.remove('affected'))}
function nextIncident(){if(!playing)return;if(round>=6||health<=0){endGame();return}clearAffected();current=incidents[Math.floor(Math.random()*incidents.length)];game.title.textContent=current.title;game.pop.classList.add('active');$(current.node).classList.add('affected');game.status.textContent='INCIDENT';game.status.style.color='var(--red)';game.message.textContent='Respond now — system health is at risk.';round++;incidentTimeout=setTimeout(()=>resolveAction(null),reduced?800:6500)}
function resolveAction(action){if(!playing||!current)return;clearTimeout(incidentTimeout);if(action===current.action){score+=Math.round(250+health*2);health=Math.min(100,health+2);game.message.textContent='Correct response. Incident contained.'}else{health=Math.max(0,health-14);game.message.textContent=action?'Wrong action. Health decreased.':'Too slow. The incident spread.'}updateGame();game.pop.classList.remove('active');clearAffected();current=null;setTimeout(nextIncident,reduced?80:900)}
function startGame(){playing=true;score=0;health=92;round=0;game.start.disabled=true;game.start.innerHTML='Simulation running <span>•••</span>';updateGame();nextIncident()}
function endGame(){playing=false;clearAffected();game.pop.classList.remove('active');game.status.textContent=health>50?'STABILIZED':'DEGRADED';game.status.style.color=health>50?'var(--green)':'var(--red)';game.message.textContent=`Simulation complete — ${score.toLocaleString()} points.`;game.start.disabled=false;game.start.innerHTML='Run another simulation <span>→</span>'}
game.start?.addEventListener('click',startGame);$$('#gameActions button').forEach(b=>b.addEventListener('click',()=>resolveAction(b.dataset.action)));

const menu=$('.menu');menu?.addEventListener('click',()=>{const nav=$('.nav nav');nav.style.display=nav.style.display==='flex'?'none':'flex'});
