const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const previous = document.querySelector('#prev');
const auto = true;
const intervalTime = 5000;
let slideInterval;

const nextSlide = function nextSlide(){
    //  Get the Current Slide
    const current = document.querySelector('.current');
    //Remove current Class
    current.classList.remove('current');
    //check for next slide
    if(current.nextElementSibling){
        // Add current to next sibling
        current.nextElementSibling.classList.add('current');

    }else{
        // Add current to start
         slides[0].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'));
}
const prevSlide = function prevSlide(){
    //  Get the Current Slide
    const current = document.querySelector('.current');
    //Remove current Class
    current.classList.remove('current');
    //check for prev slide
    if(current.previousElementSibling){
        // Add current to prev sibling
        current.previousElementSibling.classList.add('current');

    }else{
        // Add current to start
         slides[slides.lenght - 1].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'));
}

// Add button events
next.addEventListener('click', function(e){
    nextSlide();
    if(auto){
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime)

    }
});
previous.addEventListener('click', function(e) {
    prevSlide();
    if(auto){
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime)

    }
});

// Auto Slider
if(auto){
    //run next slide at interval time
    slideInterval = setInterval(nextSlide, intervalTime)

}