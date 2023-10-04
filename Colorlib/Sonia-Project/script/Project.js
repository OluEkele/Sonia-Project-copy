
var myVar;
        
function myFunction() {
    myVar = setTimeout(showPage, 3000);
  }
  
  function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("myDiv").style.display = "block";
    document.getElementById("header").style.backgroundColor = "transparent";
  }


  window.addEventListener('load', () =>{
    const loader = document.querySelector('.loader');
    loader.classList.add('loader--hidden');

    loader.addEventListener('transitionend', () =>{
        document.body.removeChild(loader);
    })
})

// let slide = tns({
//     container : ".body-slide",
//     slideBy : 1,
//     items : 2,
//     speed : 100,
//     continue : true,
//     breakpoints : false,
    
//     nav : false,
//     autoplay : true,
//     controls : false,
//     autoplayButtonOutput : false,
//     Responsive: {
//        1600: {
//         items : 4,
        
//        }, 
//        1024: {
//         items : 3,
        
//        },
//        768: {
//         items : 2,
        
//        },
//        480: {
//         items : 1
        
//        }
//     }
// })



// image scroll infinitely

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }
// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("body-slide");
//   let dots = document.getElementsByClassName("dot-click");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "flex";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.toggle(" active", "");
//   }
//   slides[slideIndex-1].style.display = "flex";
//   dots[slideIndex-1].className += " active";
// }








// let slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
// showSlides(slideIndex += n);
// }

// function currentSlide(n) {
// showSlides(slideIndex = n);
// }


// function showSlides(n) {
// let i;
// if (n > slides.children.length) {slideIndex = 1}    
// if (n < 1) {slideIndex = slides.children.length}
// for (i = 0; i < slides.children.length; i++) {
//     slides.children[i].style.display = "none";  
// }
// for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
// }
// slides.children[slideIndex-1].style.display = "flex";  
// dots[slideIndex-1].className += " active";
// }


// let Index = 0;
// move();

// function move() {
//   for (let i = 0; i < imageSlides.length; i++) {
     
//     if(i > 3, imageSlides.length -= 1){
//       imageSlides[i].style.display = "flex";
//       setTimeout(move, 2000);
//     console.log(imageSlides)  
//   }
//   }

// }

//   Index++;
//   if (Index < slides.children.length) {Index = 1}    
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" flow", "");
//   }
//   slides.children[Index-1].style.display = "flex";  
//   dots[Index-1].className += " flow";
//   setTimeout(move, 5000); // Change image every 5 seconds
// }








  