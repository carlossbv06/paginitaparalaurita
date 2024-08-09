const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function () {
    alert('pues que sepas que yo te amo muchisimo mas, ya te lo he dicho de mil maneras y te lo digo creando una pagina web para que lo tengas mas claro:)')
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function() {
    const randomX = parseInt(math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top' ,randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn.style.setProperty('trasform',`translate(-${randomX}%,-${randomY}%)`);
})