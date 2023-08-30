let menuBtn = document.querySelector('.burger__btn');
let menu = document.querySelector('.burger__menu-wrapper');
menuBtn.addEventListener('click', function(){
	menu.classList.toggle('active');
})