//Animations for Side Selection
const xOption = document.getElementById('xOption');
const playerOrderFirst = document.getElementById('playerOrderFirst');
const oOption = document.getElementById('oOption');
const playerOrderSecond = document.getElementById('playerOrderSecond');
const sideSelection = document.getElementById('sideSelection');

xOption.addEventListener('click', () => {
    xOption.classList.add('explode');
    sideSelection.classList.add('fadeOut');
});

oOption.addEventListener('click', () => {
    oOption.classList.add('explode');
    sideSelection.classList.add('fadeOut');
});

xOption.addEventListener('mouseover', () => {
    playerOrderFirst.style.color = 'black';
});

xOption.addEventListener('mouseout', () => {
    playerOrderFirst.style.color = "#636363"; 
});

oOption.addEventListener('mouseover', () => {
    playerOrderSecond.style.color = 'black';
});

oOption.addEventListener('mouseout', () => {
    playerOrderSecond.style.color = "#636363";
});
