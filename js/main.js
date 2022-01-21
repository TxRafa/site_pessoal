
$('.slider-principal').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 2000
    
});



let imagens = document.querySelectorAll('.small.img');
let modal = document.querySelector('.modal');
let modalImg = document.querySelector('#modal-img');
let btClose = document.querySelector('#bt-close');

for(let i = 0; i<imagens.length; i++) {
    imagens[i].addEventListener('click', function(){
        alert(i)
    })
}