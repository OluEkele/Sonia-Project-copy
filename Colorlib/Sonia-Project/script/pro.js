// let slide = tns({
//     container : ".body-slide",
//     width : 100,
//     "items" : 1,
//     "scrollBy" : true,
//     "slideBy" : "1",
//     "speed" : 400,
//     "nav" : false,
//     autoplay : true,
//     controls : false,
//     autoplayButtonOutput : false,
//     Responsive: {
//        1600: {
//         items : 3, 
//         },
//        1024: {
//         items : 3,
//         gutter : 20
//        },
//        768: {
//         items : 2,
//         gutter : 20
//        },
//        480: {
//         items : 1
        
//        }
//     }
// })



// const scroller = document.querySelector(".body-slide");
// if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
//   addAmination();
// }
// function addAmination() {
//   scroller.forEach((scroller) =>{
//     scroller.setAttribute('data-animation', 'true');

//     const scrollerImage = scroller.querySelector('.image-slide');
//     const scrollerContent = Array.from(scroller.children);

//     scrollerContent.forEach((item) => {
//       const duplicateItem = item.cloneNode(true);
//       duplicateItem.setAttribute("aria-hidden", "true");
//       scrollerImage.appendChild(duplicateItem);
//     });
//   });
// }




var myVar;
        
function myFunction() {
    myVar = setTimeout(showPage, 3000);
  }
  
  function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("myDiv").style.display = "block";
}    




window.addEventListener('load', () =>{
    const loader = document.querySelector('.loader');
    loader.classList.add('loader--hidden');

    loader.addEventListener('transitionend', () =>{
        document.body.removeChild(loader);
    })
})





var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}