var sliderImages = Array.from(document.querySelectorAll('.slider img'));
var dots = Array.from(document.querySelectorAll('.container-dot span'));

//Number of Slide
var slidesCount = sliderImages.length;

//Current Slide
var currentSlide = 1;
var currentDots = 1;

sliderImages[currentSlide -1].classList.add('active');
dots[currentDots -1].classList.add('active');
const nexBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');


nexBtn.onclick = nextSlide;
prevBtn.onclick =prevSlide;

console.log(currentSlide);
function nextSlide(){
    dots[currentDots -1].classList.remove('active');
    sliderImages[currentSlide -1].classList.remove('active');
    currentSlide +=1;
    currentDots += 1;
    if(currentSlide > sliderImages.length){
        currentSlide = 1;
    }
    sliderImages[currentSlide -1].classList.add('active');
    dots[currentDots -1].classList.add('active');
}

function prevSlide(){
    console.log(currentSlide);
    dots[currentDots -1].classList.remove('active');
    sliderImages[currentSlide -1].classList.remove('active');
    currentSlide -=1;
    currentDots -= 1;
    if(currentSlide <= 0){
        currentSlide = sliderImages.length;
        
    }
    sliderImages[currentSlide -1].classList.add('active');
    dots[currentDots -1].classList.add('active');
}