const carouselShow = document.querySelector('.carousel__show');
const images = carouselShow.querySelectorAll('img')

const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');

let counter = 0;
let isMove = false
const size = images[0].width;
function next() {
    prevBtn.disabled = false
    if ( counter+1 >= images.length)
     {
         nextBtn.disabled = true
         return;
     } 
     
     counter++;
    carouselShow.style.transform = 'translateX('+(-size*counter)+'px)'; 
}

function prev() {
    nextBtn.disabled = false
    if (counter===images.length)
      counter-=2
     else{
        if ( counter <= 0) {
            prevBtn.disabled = true
            return;
        }
        else
        counter--;
     }
    carouselShow.style.transform = 'translateX('+(-size*counter)+'px)';
}
nextBtn.addEventListener('click',next)
prevBtn.addEventListener('click',prev)

carouselShow.addEventListener('mousedown', () => isMove = true)
carouselShow.addEventListener('mouseup', () => isMove = false)
carouselShow.addEventListener('mouseleave', () => isMove = false)
carouselShow.addEventListener('mousemove',(e) =>{
    if ( isMove  )
    console.log(e)
})