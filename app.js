const FORM_ENDPOINT=""; // Formspree link yahan paste karein (optional). Khali ho to lead WhatsApp par jati hai.
const WA="17712325670";
const wa=document.getElementById('wa');
addEventListener('scroll',()=>wa.classList.toggle('s',scrollY>250));
document.getElementById('mb').onclick=()=>document.getElementById('nv').classList.toggle('o');
document.querySelectorAll('form.lead').forEach(f=>f.addEventListener('submit',async e=>{
e.preventDefault();const d=Object.fromEntries(new FormData(f));
const t=`New Quote Request%0AName: ${d.name}%0APhone: ${d.phone}%0AEmail: ${d.email}%0AZIP: ${d.zip}%0ADetails: ${d.details||'-'}`;
if(FORM_ENDPOINT){try{await fetch(FORM_ENDPOINT,{method:'POST',headers:{Accept:'application/json'},body:new FormData(f)});f.innerHTML='<h3>Thank you!</h3><p>We received your request and will call you shortly.</p>';return}catch(x){}}
open(`https://wa.me/${WA}?text=${t}`,'_blank');}));
