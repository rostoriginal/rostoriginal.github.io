// HOME SLIDER
(function(){
	let sliderImages = document.querySelectorAll(".slide");
	let sliderNav = document.querySelectorAll(".slider_nav-link");
	let current = 0;

	// Clear all images and nav
	function reset() {
	  for (let i = 0; i < sliderImages.length; i++) {
		sliderImages[i].style.display = "none";
		sliderNav[i].classList.remove('-active-slide');
		}
	}
	// Init slider
	function startSlide() {
	  reset();
	  sliderImages[0].style.display = "flex";
		sliderNav[0].classList.add('-active-slide');
	  setInterval(animationSlide,7000);
	}
	
	//loop slider 
	function animationSlide(){
		reset();
		if(current === 0 || current > 0 && current < sliderImages.length-1){
			nextSlide()
		} else {
			current = 0;
			prevSlide();
		}
	}

function nextSlide(){
	sliderImages[current + 1].style.display = "flex";
	sliderNav[current].classList.remove('-active-slide');
	sliderNav[current + 1].classList.add('-active-slide');
	current++;
}

function prevSlide(){
		sliderImages[current].style.display = "flex";
		sliderNav[current].classList.add('-active-slide');
		sliderNav[current+1].classList.remove('-active-slide');
}
	startSlide();
})();


// TOOGLE NAVIGATION
(function(){
      
let flag = 0;

$('.nav_toogle').click(function(){
    if (window.matchMedia("(max-width:  992px)").matches) {
        $('.header_nav').removeAttr('style');
    } 
    if(flag){
        $('.header').animate({
            'height': '50px'
        }, 500);
        $('.header_nav').css('display', 'none');
        flag = 0;
       } else {
        $('.header').animate({
            'height': '200px'
        }, 500);
            $('.header_nav').css('display', 'grid');
        flag = 1;
       }
});


})();