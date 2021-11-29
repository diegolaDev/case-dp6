// Preencha este arquivo com qualquer código que você necessite para realizar a
// coleta, desde a biblioteca analytics.js, gtag.js ou o snippet do Google Tag 
// Manager. No último caso, não é necessário implementar a tag <noscript>.
// O ambiente dispõe da jQuery 3.5.1, então caso deseje, poderá utilizá-la
// para fazer a sua coleta.
// Caso tenha alguma dúvida sobre o case, não hesite em entrar em contato.

let contact = document.getElementsByClassName('menu-lista-contato')[0];
let download = document.getElementsByClassName('menu-lista-download')[0];
let buttons = document.getElementsByClassName('card-montadoras');
let formItem = document.querySelectorAll('.contato input');
let submit = document.querySelectorAll('.contato button')[0];

if(contact){
    contact.addEventListener('click',function(){sendGAEvent("menu","entre_em_contato","link_externo")});
}

if(download){
    download.addEventListener('click',function(){sendGAEvent("menu","download_pdf","download_pdf")});
}

if(buttons){
    for (var i = 0; i < buttons.length; i++) {
        let name = buttons[i].getAttribute("data-name");
        buttons[i].addEventListener('click',function(){sendGAEvent("analise","ver_mais",name)});
    }
}

if(formItem) {   
    for (var i = 0; i < formItem.length; i++) {
        let name = formItem[i].getAttribute("id");
        formItem[i].addEventListener('click',function(){sendGAEvent("contato",name,"preencheu")});
    }
}

if(submit){

    if(submit.getAttribute("type") == "submit"){
        submit.addEventListener('click',function(){sendGAEvent("contato","enviado","enviado")});
    }
}

function sendGAEvent(ec,ea,el) {
    ga('send', {
        hitType: 'event',
        eventCategory: ec,
        eventAction: ea,
        eventLabel: el
      });
}