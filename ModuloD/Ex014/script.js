function carregar(){

    var data = new Date().getHours();



    var msg = document.getElementById('msg');
    var img = document.getElementById('imagem');

    msg.innerHTML = `Agora são ${data} horas`

    if (data >= 0 && data < 12) {
        img.src = 'fotomanha.png'
        document.body.style.background = '#cfa1b2'
        
    }else if (data > 12 && data < 18) {
        img.src = 'fototarde.png'
        document.body.style.background = '#b47c43';

    }else{
        img.src = 'fotonoite.png'
        document.body.style.background = '#1e353b';

    }


}


