const imagePhone = document.getElementsByClassName("cellphone-area__image")[0];

function alteraFoto1(){
    setTimeout(alteraFoto2, 4000)
}

function alteraFoto2(){
    imagePhone.src = "img/pic2.png";
    setTimeout(alteraFoto3, 4000)
}

function alteraFoto3(){
    imagePhone.src = "img/pic3.png";
    setTimeout(alteraFoto4, 4000)
}

function alteraFoto4(){
    imagePhone.src = "img/girlpic.png";
    setTimeout(alteraFoto1, 4000)
}



