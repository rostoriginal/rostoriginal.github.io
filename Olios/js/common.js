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

//TOOGLE NAVIGATION
(function(){
	let navToogler = document.getElementById('js-navToogler');
	let nav =  document.getElementById('js-nav');
	let tooglerIcon = document.getElementById('js-tooglerIcon');
	let flag = 0;
	let px = 'px';
	navToogler.onclick = function(){
		if(flag) {
			nav.style.right = -300 + px;
			tooglerIcon.classList.add('fa-bars');
			flag = 0;
		} else {
			nav.style.right =  0 + px;
			tooglerIcon.classList.remove('fa-bars');
			tooglerIcon.classList.add('fa-close');
			flag = 1;
		}
	}
})();

//ANIMATION SLIDER BUTTON
(function(){
	let buttons = document.getElementsByClassName('slide_btn'),
	forEach = Array.prototype.forEach;

	forEach.call(buttons, function (b) {
		b.addEventListener('click', addElement);
	});

	function addElement(e) {
		let addDiv  = document.createElement('div'),
				mValue  = Math.max(this.clientWidth, this.clientHeight),
				rect    = this.getBoundingClientRect();
				sDiv    = addDiv.style,
				px      = 'px';
		sDiv.width  = sDiv.height = mValue + px;
		sDiv.left  = e.clientX - rect.left - (mValue / 2) + px;
		sDiv.top   = e.clientY - rect.top - (mValue / 2) + px;
		addDiv.classList.add('pulse');
	this.appendChild(addDiv);
}
})();