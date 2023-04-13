var btn = document.querySelector('.mostrar-esconder');
var popup = document.querySelector('.popup')
var informacao = document.querySelector('.email-popup')


document.documentElement.onclick = function(event){
    console.log(event.target)
    if(event.target == btn){
        popup.style.display = 'block';
    }else{
        popup.style.display = 'none';
    }
}