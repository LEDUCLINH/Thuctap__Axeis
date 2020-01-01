window.addEventListener('scroll', checkSlide) 
function checkSlide() {
   images.forEach(image => {
       const pageLocation = window.scrollY + window.innerHeight;
       const quaterImage = pageLocation - image.height/4;

       if ( ( window.scrollY <= image.offsetTop + image.height) && (quaterImage  >=  image.offsetTop))
         image.classList.add('active')
       else
         image.classList.remove('active')
   })
}

// function debounce(func, wait = 20, immediate = true) {
//     var timeout;
//     return function() {
//       var context = this, args = arguments;
//       var later = function() {
//         timeout = null;
//         if (!immediate) func.apply(context, args);
//       };
//       var callNow = immediate && !timeout;
//       console.log(timeout)
//       clearTimeout(timeout);
//       timeout = setTimeout(later, wait);
//       if (callNow) func.apply(context, args);
//     };
//   };

const images = document.querySelectorAll('.slide-in');