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