// Automatic textSlide show
// let textSlideShow = 0;
// showText();
// function showText() {
//     let i;
//     let texts = document.querySelectorAll(".text-slide");
//     // let zero = document.querySelectorAll("dot-service");
//     for(i = 0; i < texts.length; i++) {
//         texts[i].style.display = "none";
//     }
//     textSlideShow++;
//     if(textSlideShow > texts.length){textSlideShow = 1}
//     // for(i = 0; i < zero.length; i++){
//     //     zero[i].className = dotts[i].className.replace("work", "");
//     // }
//     texts[textSlideShow -1].style.display = "block";
//     // zero[textSlideShow - 1].className += "work";
//     setTimeout(showText, 5000);
// }





// let slideIndex = 1;
// showSlides(slideIndex);


// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("text-slide");
//   let dots = document.getElementsByClassName("dot-service");
//   if (n > slides.length) {slideIndex = 1}    
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "block";  
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active-dot", "");
//   }
//   slides[slideIndex+1].style.display = "block";  
//   dots[slideIndex+1].className += " active-dot";
// }