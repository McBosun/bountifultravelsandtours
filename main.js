let U=0;
const PAL={safari:['#f4a64e','#fde7bf','#fff2b8','#8a5a3c','#5b3a29'],dubai:['#2a6fbd','#cfe8ff','#fff','#e8d7bf','#c3a072'],beach:['#3f86d0','#dff3ff','#fff4c9','#f2e0bf','#1f5fa8'],egypt:['#eeb060','#ffe8c2','#fff1b8','#e2b374','#b7793f'],cape:['#5aa0e6','#e6f3ff','#fff','#3d6b4f','#0f3b6e'],ghana:['#2f7ac2','#f8dcb2','#ffe8a3','#7a4d33','#1f5fa8']};
function tree(x,y,s){return `<g transform="translate(${x} ${y}) scale(${s})"><rect x="-3" y="-60" width="6" height="60" fill="#3b2418"/><ellipse cx="0" cy="-66" rx="46" ry="12" fill="#3f5b2c"/><ellipse cx="-22" cy="-58" rx="26" ry="8" fill="#4a6a34"/></g>`}
function shapes(k){
if(k=='safari')return `<path d="M0 380 L120 320 L240 370 L380 310 L520 375 L680 330 L800 370 V420H0Z" fill="#a4683f" opacity=".6"/>`+tree(160,410,1.2)+tree(560,420,1.5)+tree(690,400,.9)+`<g fill="#3b2418"><rect x="380" y="380" width="46" height="20" rx="8"/><rect x="418" y="340" width="10" height="42"/><rect x="386" y="398" width="5" height="22"/><rect x="412" y="398" width="5" height="22"/><circle cx="428" cy="338" r="8"/></g>`;
if(k=='dubai'){let s='<g fill="#1a4d8f" opacity=".85">';[[60,260,50],[130,220,60],[210,300,45],[300,200,60],[560,250,55],[630,290,45],[700,230,60]].forEach(a=>s+=`<rect x="${a[0]}" y="${a[1]}" width="${a[2]}" height="${420-a[1]}"/>`);s+=`<polygon points="440,420 452,120 464,420"/><polygon points="400,420 440,220 470,420" opacity=".6"/><rect x="372" y="300" width="48" height="120" fill="#0f3b6e"/></g><g fill="#fff8" >`;for(let i=0;i<40;i++)s+=`<rect x="${70+(i*37)%650}" y="${280+(i*53)%110}" width="4" height="6"/>`;return s+'</g>'}
if(k=='beach')return `<rect y="330" width="800" height="90" fill="#2a7fd0" opacity=".85"/><path d="M0 350q50-14 100 0t100 0 100 0 100 0 100 0 100 0 100 0 100 0" stroke="#fff" stroke-width="3" fill="none" opacity=".7"/><path d="M0 385q50-14 100 0t100 0 100 0 100 0 100 0 100 0 100 0 100 0" stroke="#fff" stroke-width="3" fill="none" opacity=".5"/><path d="M180 470 Q200 350 250 250" stroke="#5b3a29" stroke-width="12" fill="none"/><g fill="#2f7a3a"><path d="M250 250q-70-40-130 10q60-30 130-10z"/><path d="M250 250q-30-70-110-60q70 0 110 60z"/><path d="M250 250q40-70 120-50q-80 0-120 50z"/><path d="M250 250q70-30 130 30q-60-40-130-30z"/><path d="M250 250q-10 50-70 80q60-20 70-80z"/></g>`;
if(k=='egypt')return `<polygon points="120,400 270,180 420,400" fill="#c9924f"/><polygon points="270,180 420,400 300,400" fill="#a87438"/><polygon points="360,400 500,240 640,400" fill="#d4a060"/><polygon points="500,240 640,400 540,400" fill="#b58245"/><polygon points="560,400 650,320 740,400" fill="#c9924f"/>`;
if(k=='cape')return `<polygon points="60,400 160,250 230,190 560,190 640,260 760,400" fill="#3d5a72"/><polygon points="230,190 560,190 600,225 200,225" fill="#5b7c96"/><rect y="390" width="800" height="40" fill="#1f5fa8"/><path d="M0 410q50-10 100 0t100 0 100 0 100 0 100 0 100 0 100 0 100 0" stroke="#fff" stroke-width="3" fill="none" opacity=".6"/>`;
if(k=='ghana')return `<rect x="200" y="270" width="380" height="140" fill="#f4efe6"/><rect x="200" y="255" width="380" height="16" fill="#e8e0d2"/>`+[...Array(12)].map((_,i)=>`<rect x="${204+i*32}" y="240" width="18" height="16" fill="#f4efe6"/>`).join('')+`<rect x="260" y="190" width="90" height="82" fill="#f4efe6"/><rect x="450" y="205" width="80" height="66" fill="#f4efe6"/><path d="M370 410v-70a20 20 0 0 1 40 0v70z" fill="#5b3a29"/><g fill="#5b3a29"><rect x="230" y="310" width="20" height="30"/><rect x="520" y="310" width="20" height="30"/></g>`;return''}
function scene(k){const p=PAL[k],i=++U;return `<svg viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice"><defs><linearGradient id="g${i}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${p[0]}"/><stop offset="1" stop-color="${p[1]}"/></linearGradient></defs><rect width="800" height="500" fill="url(#g${i})"/><circle cx="620" cy="160" r="58" fill="${p[2]}" opacity=".95"/><circle cx="620" cy="160" r="90" fill="${p[2]}" opacity=".2"/>${shapes(k)}<rect y="410" width="800" height="90" fill="${p[3]}"/><path d="M0 430q200-40 400 0t400 0V500H0Z" fill="${p[4]}" opacity=".55"/></svg>`}
const $=s=>document.querySelector(s),R=1500;
const T=[
{n:"Cape Town and the Garden Route",c:"South Africa",r:"Africa",d:8,p:2450000,o:2750000,s:"cape",rt:4.7,it:["Arrive Cape Town, city tour","Table Mountain and Cape Peninsula","Winelands tasting","Garden Route drive","Knysna and coast","Wildlife reserve visit","Free day","Departure"]},
{n:"Dubai Discovery",c:"United Arab Emirates",r:"Middle East",d:6,p:1980000,o:2200000,s:"dubai",rt:4.6,it:["Arrival and marina evening","Old Dubai and souks","Desert safari with dinner","Skyline and Burj visit","Abu Dhabi day trip","Shopping and departure"]},
{n:"Zanzibar Island Escape",c:"Tanzania",r:"Africa",d:7,p:2150000,o:2400000,s:"beach",rt:4.8,it:["Arrival, beach resort","Stone Town walking tour","Spice farm visit","Sandbank boat trip","Snorkelling day","Free beach day","Departure"]},
{n:"Ghana Heritage Trail",c:"Accra and Cape Coast",r:"Africa",d:5,p:1250000,o:1400000,s:"ghana",rt:4.5,it:["Arrive Accra, city tour","Cape Coast Castle","Kakum canopy walk","Elmina and fishing villages","Markets and departure"]},
{n:"Kenya Safari Highlights",c:"Nairobi and Maasai Mara",r:"Africa",d:8,p:3100000,o:3450000,s:"safari",rt:4.9,it:["Arrive Nairobi","Giraffe centre visit","Drive to Maasai Mara","Game drives","Maasai village visit","Sunrise safari","Return to Nairobi","Departure"]},
{n:"Cairo and the Nile",c:"Egypt",r:"Middle East",d:9,p:2850000,o:3150000,s:"egypt",rt:4.6,it:["Arrive Cairo","Pyramids and Sphinx","Egyptian Museum","Fly to Luxor","Valley of the Kings","Nile cruise","Aswan","Return to Cairo","Departure"]}];
let cur='NGN',reg='',fav=new Set(),filt={d:'',l:'',b:''};
const fm=n=>cur=='NGN'?'₦'+n.toLocaleString('en-NG'):'$'+Math.round(n/R).toLocaleString('en-US');
function match(t){return(!reg||t.r==reg)&&(!filt.d||t.r==filt.d)&&(!filt.l||(filt.l=='20'?t.d>8:t.d<=+filt.l))&&(!filt.b||t.p<=+filt.b)}
function draw(){$('#tg').innerHTML=T.map((t,i)=>match(t)?`<div class="card rv in"><div class="img">${scene(t.s)}<span class="badge">${t.d} days</span><button class="heart ${fav.has(i)?'on':''}" data-h="${i}" aria-label="Save">♥</button></div><div class="body"><h3>${t.n}</h3><span class="meta">${t.c} · ★ ${t.rt}</span><div class="price">From <strong>${fm(t.p)}</strong> pp<s>${fm(t.o)}</s></div><div class="row"><button class="btn ol sm" data-v="${i}">Quick View</button><a class="btn sm" href="#quote" data-q="${i}">Enquire</a></div></div></div>`:'').join('')||'<p>No tours match. Try widening your search.</p>'}
$('#chips').innerHTML=['All','Africa','Middle East'].map((c,i)=>`<button class="chip ${i?'':'on'}" data-r="${i?c:''}">${c}</button>`).join('');
$('#chips').onclick=e=>{const b=e.target.closest('[data-r]');if(!b)return;reg=b.dataset.r;document.querySelectorAll('#chips .chip').forEach(x=>x.classList.toggle('on',x==b));draw()};
$('#sgo').onclick=()=>{filt={d:$('#sd').value,l:$('#sl').value,b:$('#sb').value};draw();location.hash='#tours'};
$('#cur').onchange=e=>{cur=e.target.value;draw()};
$('#tg').onclick=e=>{const h=e.target.closest('[data-h]'),v=e.target.closest('[data-v]'),q=e.target.closest('[data-q]');
if(h){const i=+h.dataset.h;fav.has(i)?fav.delete(i):fav.add(i);h.classList.toggle('on')}
if(v){const t=T[+v.dataset.v];$('#mb').innerHTML=`<button class="mx" onclick="md.classList.remove('on')">✕</button><div class="img">${scene(t.s)}</div><div class="mb"><h3 style="margin:0">${t.n}</h3><div class="meta">${t.c} · ${t.d} days · ★ ${t.rt}</div><p>Sample itinerary:</p><ol>${t.it.map(x=>`<li>${x}</li>`).join('')}</ol><div class="price">From <strong>${fm(t.p)}</strong> per person</div><p><a class="btn" href="#quote" onclick="md.classList.remove('on');ft.value='${t.n}'">Enquire about this trip</a></p></div>`;$('#md').classList.add('on')}
if(q)$('#ft').value=T[+q.dataset.q].n};
$('#md').onclick=e=>{if(e.target.id=='md')e.target.classList.remove('on')};
$('#ft').innerHTML='<option value="">Trip of interest</option>'+T.map(t=>`<option>${t.n}</option>`).join('')+'<option>Custom trip</option>';
draw();
$('#dg').innerHTML=[['Kenya','safari'],['Dubai','dubai'],['Zanzibar','beach'],['Egypt','egypt'],['South Africa','cape'],['Ghana','ghana']].map(a=>`<a href="#quote">${scene(a[1])}<span>${a[0]}</span></a>`).join('');
$('#rimg').innerHTML=scene('beach');
const HS=[['cape','Your next adventure starts in Lagos','Guided tours, family holidays and city breaks, planned by people who know the way.'],['safari','Safari mornings you will never forget','Big skies, golden plains and the Maasai Mara, arranged from door to door.'],['dubai','Skylines, souks and desert nights','Short breaks and long stays across the Middle East with full support.'],['beach','Island time, sorted','Zanzibar and beyond, with flights, resorts and transfers included.']];
$('#slides').innerHTML=HS.map(s=>`<div class="slide">${scene(s[0])}</div>`).join('');
$('#dots').innerHTML=HS.map((_,i)=>`<button data-i="${i}" aria-label="Slide ${i+1}"></button>`).join('');
let si=0,tm;function go(i){si=i;document.querySelectorAll('.slide').forEach((x,j)=>x.classList.toggle('on',j==i));document.querySelectorAll('#dots button').forEach((x,j)=>x.classList.toggle('on',j==i));$('#ht').textContent=HS[i][1];$('#hp').textContent=HS[i][2]}
go(0);function auto(){clearInterval(tm);tm=setInterval(()=>go((si+1)%HS.length),5500)}auto();
$('#dots').onclick=e=>{const b=e.target.closest('[data-i]');if(b){go(+b.dataset.i);auto()}};
const TS=[["Everything was arranged perfectly, from the visa to the airport pickup. We felt looked after all week.","Adaeze O., Lagos"],["Our family safari was the best holiday we have taken. The guide was wonderful with the children.","Tunde and Bisi A., Ikeja"],["Great value and very responsive. I will definitely book my next trip with them.","Emeka N., Lekki"]];
let ti=0;function tS(){$('#tq').textContent='“'+TS[ti][0]+'”';$('#ta').textContent=TS[ti][1]}tS();
$('#tn').onclick=()=>{ti=(ti+1)%3;tS()};$('#tp').onclick=()=>{ti=(ti+2)%3;tS()};
$('#burger').onclick=()=>$('#nav').classList.toggle('open');$('#nav').onclick=()=>$('#nav').classList.remove('open');
$('#f').onsubmit=e=>{e.preventDefault();const n=$('#fn').value.trim(),m=$('#fe').value.trim();
if(!n||!/^\S+@\S+\.\S+$/.test(m)){$('#er').textContent='Please enter your name and a valid email.';return}
$('#er').textContent='';const t=`Hello Bountiful Travels, I am ${n} (${m}). Trip: ${$('#ft').value||'Not sure yet'}. Travellers: ${$('#fg').value||'-'}. ${$('#fm').value}`;
window.open('https://wa.me/2349012279546?text='+encodeURIComponent(t),'_blank')};
$('#sg').innerHTML=[['✈️','Flight Ticketing','We book domestic and international flights at the best rates.'],['🏨','Hotel Reservations','Comfortable stays worldwide, tailored to your budget.'],['🛂','Visa Assistance','We guide you through the visa application process with ease.'],['🏝️','Holiday Packages','Amazing holiday deals for leisure, family and group trips.'],['🛡️','Travel Insurance','Stay protected with our reliable travel insurance options.'],['🚌','Tours & Excursions','Explore top destinations with our carefully curated tours.'],['🚐','Airport Transfers','Safe, reliable and comfortable airport pick up and drop off.'],['🤝','Corporate Travel','Efficient travel solutions for businesses and corporate teams.'],['👥','Group Travel','Special arrangements for schools, churches, associations and groups.'],['📋','Travel Consulting','Expert advice and personalized support for all your travel needs.']].map(s=>`<div class="sv"><div class="ic">${s[0]}</div><div><h3>${s[1]}</h3><p>${s[2]}</p></div></div>`).join('');
const io=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}}),{threshold:.15});document.querySelectorAll('.rv').forEach(x=>io.observe(x));
const so=new IntersectionObserver(es=>es.forEach(x=>{if(!x.isIntersecting)return;const b=x.target,n=+b.dataset.n;let c=0;const st=Math.ceil(n/50);const iv=setInterval(()=>{c=Math.min(n,c+st);b.textContent=c.toLocaleString()+(n>1000?'+':'');if(c>=n)clearInterval(iv)},30);so.unobserve(b)}),{threshold:.6});document.querySelectorAll('[data-n]').forEach(x=>so.observe(x));

/* ===== Enhancements: progress bar, sticky header, active nav, back to top, stagger, auto reviews ===== */
(()=>{
const hd=document.querySelector('header');
const bar=document.createElement('div');bar.id='prog';document.body.appendChild(bar);
const bt=document.createElement('button');bt.id='bt';bt.setAttribute('aria-label','Back to top');bt.textContent='↑';
bt.onclick=()=>scrollTo({top:0,behavior:'smooth'});document.body.appendChild(bt);
const onScroll=()=>{const y=scrollY,h=document.documentElement.scrollHeight-innerHeight;
bar.style.width=(h>0?y/h*100:0)+'%';hd.classList.toggle('sc',y>20);bt.classList.toggle('show',y>600)};
addEventListener('scroll',onScroll,{passive:true});onScroll();
const links=[...document.querySelectorAll('#nav a')];
const spy=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)links.forEach(a=>a.classList.toggle('act',a.getAttribute('href')=='#'+e.target.id))}),{rootMargin:'-45% 0px -50% 0px'});
document.querySelectorAll('section[id]').forEach(s=>spy.observe(s));
document.querySelectorAll('.svc .sv,.dest a,.why>div').forEach((e,i)=>e.style.setProperty('--i',i%10));
setInterval(()=>{if(!document.hidden)document.getElementById('tn').click()},7000);
})();
