let count = 1;
document.getElementById("radio1").checked = true;

setInterval( function(){
    nextImage();
}, 3000)

function nextImage(){
    count++;
    if (count>4) {
        count = 1;
    }
    document.getElementById("radio"+count).checked = true;
}

function action(){
    let modal = document.querySelector('.modal')

    modal.style.display = 'block';
}

function fechar() {
    let modal = document.querySelector('.modal')

    modal.style.display = 'none';
}

document.querySelector('#itens-modal').addEventListener("wheel", event => {
    if (event.deltaY > 0) {
        event.target.scrollBy(300, 0)
    }else{
        event.target.scrollBy(-300, 0)
    }
})

