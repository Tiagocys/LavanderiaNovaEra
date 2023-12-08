var menuHamburguer = document.getElementById('menuHamburguer');
var menuHidden = document.getElementById('menuHidden');
var x = document.getElementById('x');
var x1 = document.getElementById('x1');
var x2 = document.getElementById('x2');
var x3 = document.getElementById('x3');
var x4 = document.getElementById('x4');
var x5 = document.getElementById('x5');

menuHamburguer.addEventListener('click',openMenuHidden);

function openMenuHidden(){
    menuHidden.style.display = 'block';
}

x.addEventListener('click',fecharMenu);
x1.addEventListener('click',fecharMenu);
x2.addEventListener('click',fecharMenu);
x3.addEventListener('click',fecharMenu);
x4.addEventListener('click',fecharMenu);
x5.addEventListener('click',fecharMenu);

function fecharMenu(){
    menuHidden.style.display = 'none';
}
