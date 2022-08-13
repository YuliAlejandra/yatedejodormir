const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function () {
    alert('Me alegro que te admitas tu derrota amor jaja, ya estamos cumpliendo 5 mese, uf! que rapido pasa el tiempo pero no me imagine que estariamos mucho tiempo... si si, se que diras "que pesimista eres" pues te toco estar con esta pesimista jaja, pero tu tambien eres asi de terco aun asi te amo jaja, sabes me gustaria mejor mandarte un paquete que hacer esto ;-; no sabes como me mate para que me saliera, pero hablando serio me encantaria mandarte un paquete con cosas que yo hago con mis manos para ti <3 te dedicaria mil cosas pero mi flojera es más grande y como dicen "el mejor regalo es de quien te lo de" o algo así jaja te amo... espero estes a mi lado para siempre <3')
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
}) 