const body = document.querySelector('body');
const btnDark = document.querySelector('#btnDark');
const removeDark = document.querySelector('.removeDark');
const box = document.getElementsByClassName('box');
var contaEvento = Number(0); 


btnDark.addEventListener('click',function clicou(e) {
    e.preventDefault();
    contaEvento = contaEvento++;
    console.log(contaEvento.value);
    body.style.transition = '.8s ease all'
    body.style.backgroundColor = '#0D1117';
    body.style.color = '#ffffff';
    
    for (let i = 0; i < box.length; i++) {
        box[i].style.backgroundColor = '#010409';
        box[i].style.border = 'none';
        box[i].style.color = '#ffffff';
    }
});
if(clicou() == true){

}

