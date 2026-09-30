const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
const toggle = document.querySelector('.menu-toggle');
const panel = document.querySelector('.menu-panel');
if (toggle && panel) {
  let background = [];
  const close = () => {
    if (!panel.classList.contains('open')) return;
    background.forEach(([element, wasInert]) => { element.inert = wasInert; });
    panel.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('menu-open');
    toggle.focus();
    panel.inert = true;
    panel.setAttribute('aria-hidden', 'true');
  };
  toggle.addEventListener('click', () => {
    panel.inert = false;
    panel.setAttribute('aria-hidden', 'false');
    panel.classList.add('open');
    toggle.setAttribute('aria-expanded', 'true');
    document.body.classList.add('menu-open');
    background = [...document.querySelectorAll('.site-header, main, .close, .fallback-nav')]
      .map(element => [element, element.inert]);
    background.forEach(([element]) => { element.inert = true; });
    panel.querySelector('.menu-close').focus();
  });
  panel.querySelector('.menu-close').addEventListener('click', close);
  panel.querySelectorAll('a').forEach(link => link.addEventListener('click', close));
  document.addEventListener('keydown', event => {
    if (!panel.classList.contains('open')) return;
    if (event.key === 'Escape') { event.preventDefault(); close(); }
    if (event.key === 'Tab') {
      const controls = [...panel.querySelectorAll('button, a[href]')];
      const first = controls[0], last = controls.at(-1);
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    }
  });
  document.documentElement.classList.add('menu-ready');
}

if ('IntersectionObserver' in window) {
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.12,rootMargin:'0px 0px -8%'});
document.querySelectorAll('.reveal,.split-reveal').forEach(el=>observer.observe(el));
requestAnimationFrame(()=>document.querySelectorAll('.reveal,.split-reveal').forEach(el=>{if(el.getBoundingClientRect().top<innerHeight*.92)el.classList.add('visible')}));

document.documentElement.classList.add('motion-ready');
const motionItems=[...document.querySelectorAll('.service-list details,.role-grid article,.about-facts article,.about-copy>*,.timeline article,.hero-grid>*,.hero-bottom>*,.section-head>*,.project-copy>*,.project-media,.booking-intro>*,.calendar>*,.booking-times>*,.close-top,.close-link,footer>*')];
motionItems.forEach((el,index)=>{el.classList.add('motion-item');el.style.setProperty('--motion-delay',`${Math.min(index%4,3)*70}ms`)});
const motionObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('motion-in');motionObserver.unobserve(entry.target)}}),{threshold:.08,rootMargin:'0px 0px -5%'});
motionItems.forEach(el=>motionObserver.observe(el));
requestAnimationFrame(()=>motionItems.forEach(el=>{if(el.getBoundingClientRect().top<innerHeight*.94)el.classList.add('motion-in')}));

}

const ticker=document.querySelector('.ticker div');
const cards=[...document.querySelectorAll('.project-card')];
const projectStack=document.querySelector('.project-stack');
let ticking=false;
let cardStarts=[];
let stackBase=88,stackGap=11;
function measureCards(){if(!projectStack)return;const compact=innerWidth<=800;stackBase=compact?64:88;stackGap=compact?7:11;const stackTop=projectStack.getBoundingClientRect().top+scrollY,flowGap=parseFloat(getComputedStyle(projectStack).gap)||0;let running=stackTop;cardStarts=cards.map(card=>{const start=running;running+=card.offsetHeight+flowGap;return start});cards.forEach((card,index)=>{card.style.setProperty('--stack-top',`${stackBase+index*stackGap}px`);card.style.zIndex=index+1})}
function scrollEffects(){if(reducedMotion.matches){if(ticker)ticker.style.transform='none';cards.forEach(card=>card.style.setProperty('--stack-scale','1'));ticking=false;return}if(ticker)ticker.style.transform=`translate3d(${-scrollY*.13}px,0,0)`;cards.forEach((card,index)=>{const progress=Math.max(0,Math.min(1,(scrollY+stackBase+index*stackGap-(cardStarts[index]||0))/140));card.style.setProperty('--stack-scale',(1-progress*(innerWidth<=800?.022:.035)).toFixed(4))});ticking=false}
addEventListener('scroll',()=>{if(!ticking){requestAnimationFrame(scrollEffects);ticking=true}},{passive:true});
addEventListener('resize',()=>{measureCards();scrollEffects()},{passive:true});
measureCards();scrollEffects();
reducedMotion.addEventListener('change',scrollEffects);
if(projectStack&&'ResizeObserver' in window)new ResizeObserver(()=>{measureCards();scrollEffects()}).observe(projectStack);
document.fonts?.ready.then(()=>{measureCards();scrollEffects()});

document.querySelectorAll('.service-list details').forEach(detail=>detail.addEventListener('toggle',()=>{if(detail.open)detail.parentElement.querySelectorAll('details').forEach(other=>{if(other!==detail)other.open=false})}));

const monthTitle=document.querySelector('.calendar-head h3');
if(monthTitle){
  const daysEl=document.querySelector('.days'),timesEl=document.querySelector('.times'),selectedDateLabel=document.querySelector('.selected-date'),continueButton=document.querySelector('.continue'),clockButtons=[...document.querySelectorAll('.clock-mode button')],now=new Date(),visitorTimeZone=Intl.DateTimeFormat().resolvedOptions().timeZone||'UTC',visitorOffset=new Intl.DateTimeFormat(undefined,{timeZone:visitorTimeZone,timeZoneName:'shortOffset'}).formatToParts(now).find(p=>p.type==='timeZoneName')?.value||'UTC',friendly=visitorTimeZone.replaceAll('_',' ');
  document.getElementById('visitor-timezone').textContent=friendly;
  document.getElementById('calendar-timezone').textContent=`${friendly} (${visitorOffset})`;
  let shown=new Date(now.getFullYear(),now.getMonth(),1),selectedDate=null,selectedTime=null,use24Hour=false;
  const slots=[15,15.5,16,16.5,21,21.5,22,22.5];
  const formatTime=value=>{const hours=Math.floor(value),minutes=value%1?'30':'00';if(use24Hour)return `${String(hours).padStart(2,'0')}:${minutes}`;const hour=hours%12||12;return `${hour}:${minutes}${hours>=12?'pm':'am'}`};
  function resetTimes(){selectedDate=null;selectedTime=null;timesEl.innerHTML='<p>Choose an available date to see times.</p>';selectedDateLabel.textContent='Select a date';continueButton.disabled=true;continueButton.textContent='Choose a date and time'}
  function addDay(date,className='day'){const b=document.createElement('button');b.className=className;b.setAttribute('aria-pressed','false');b.textContent=date.getDate();b.disabled=date<new Date(now.getFullYear(),now.getMonth(),now.getDate())||[0,6].includes(date.getDay());b.setAttribute('aria-label',date.toLocaleDateString(undefined,{weekday:'long',month:'long',day:'numeric'}));b.addEventListener('click',()=>select(date,b));daysEl.append(b)}
  function render(){monthTitle.textContent=shown.toLocaleDateString(undefined,{month:'long',year:'numeric'});daysEl.innerHTML='';resetTimes();const first=shown.getDay(),count=new Date(shown.getFullYear(),shown.getMonth()+1,0).getDate();for(let i=0;i<first;i++){const e=document.createElement('span');e.className='day blank';daysEl.append(e)}for(let day=1;day<=count;day++)addDay(new Date(shown.getFullYear(),shown.getMonth(),day));for(let day=1;daysEl.children.length<42;day++)addDay(new Date(shown.getFullYear(),shown.getMonth()+1,day),'day adjacent');daysEl.classList.remove('calendar-swap');requestAnimationFrame(()=>daysEl.classList.add('calendar-swap'))}
  function paintTimes(){timesEl.innerHTML='';slots.forEach((value,index)=>{const label=formatTime(value),t=document.createElement('button');t.className='time time-enter';t.style.setProperty('--time-delay',`${Math.min(index,5)*45}ms`);t.textContent=label;t.classList.toggle('selected',selectedTime===value);t.setAttribute('aria-pressed',String(selectedTime===value));t.addEventListener('click',()=>{selectedTime=value;timesEl.querySelectorAll('.time').forEach(x=>{x.classList.remove('selected');x.setAttribute('aria-pressed','false')});t.classList.add('selected');t.setAttribute('aria-pressed','true');continueButton.disabled=false;continueButton.textContent='Request this time'});timesEl.append(t)})}
  function select(date,b){selectedDate=date;selectedTime=null;continueButton.disabled=true;continueButton.textContent='Choose a time';daysEl.querySelectorAll('.day.selected').forEach(x=>{x.classList.remove('selected');x.setAttribute('aria-pressed','false')});b.classList.add('selected');b.setAttribute('aria-pressed','true');selectedDateLabel.textContent=date.toLocaleDateString(undefined,{weekday:'short',month:'short',day:'numeric'});paintTimes()}
  clockButtons.forEach((button,index)=>button.addEventListener('click',()=>{use24Hour=index===1;clockButtons.forEach(x=>{x.classList.remove('active');x.setAttribute('aria-pressed','false')});button.classList.add('active');button.setAttribute('aria-pressed','true');if(selectedDate)paintTimes()}));
  document.querySelector('.month-prev').addEventListener('click',()=>{shown=new Date(shown.getFullYear(),shown.getMonth()-1,1);render()});
  document.querySelector('.month-next').addEventListener('click',()=>{shown=new Date(shown.getFullYear(),shown.getMonth()+1,1);render()});
  continueButton.addEventListener('click',()=>{if(!selectedDate||selectedTime===null)return;const date=selectedDate.toLocaleDateString(undefined,{weekday:'long',year:'numeric',month:'long',day:'numeric'}),subject=encodeURIComponent('Project meeting request'),body=encodeURIComponent(`Hi Victor,\n\nI would like to request a 30-minute website discussion on ${date} at ${formatTime(selectedTime)} (${visitorTimeZone}).\n\nMy name:\nCompany or project:\nWhat I would like to discuss:\n`);location.href=`mailto:aderibigbevictor79@gmail.com?subject=${subject}&body=${body}`});
  render();
  document.querySelector('.booking').classList.add('booking-ready');
}

document.querySelectorAll('#year').forEach(el=>el.textContent=new Date().getFullYear());

const finePointer=matchMedia('(hover: hover) and (pointer: fine)');
const reducePointerMotion=reducedMotion;
if(finePointer.matches&&!reducePointerMotion.matches){
  const orb=document.createElement('div');
  orb.className='cursor-orb';
  orb.setAttribute('aria-hidden','true');
  document.body.append(orb);
  let targetX=-40,targetY=-40,currentX=-40,currentY=-40,orbFrame=0;
  const renderOrb=()=>{if(reducedMotion.matches){orbFrame=0;return}currentX+=(targetX-currentX)*.16;currentY+=(targetY-currentY)*.16;orb.style.transform=`translate3d(${currentX}px,${currentY}px,0) translate3d(-50%,-50%,0)`;if(Math.abs(targetX-currentX)>.1||Math.abs(targetY-currentY)>.1)orbFrame=requestAnimationFrame(renderOrb);else orbFrame=0};
  addEventListener('pointermove',event=>{if(reducedMotion.matches)return;targetX=event.clientX;targetY=event.clientY;orb.classList.add('is-visible');if(!orbFrame)orbFrame=requestAnimationFrame(renderOrb)},{passive:true});
  document.addEventListener('pointerover',event=>orb.classList.toggle('is-active',Boolean(event.target.closest('a,button,summary,input,textarea,select'))));
  document.documentElement.addEventListener('mouseleave',()=>orb.classList.remove('is-visible'));
}
