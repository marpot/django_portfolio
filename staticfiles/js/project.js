let slideIndex = 1;
showSlides(slideIndex);

function moveSlide(n){
    slideIndex += n;
    showSildes(slideIndex += n);
}

function showSildes(n){
    let i;
    let slides = document.getElementsByClassName("caroused-item")
    if (n > slides.length){
        slideIndex = 1
    }

    if (n < 1){
        slideIndex = slides.length;  
    }
    for (let i = 0; i < slides.length; i++){    
        slides[i].style.display = "none";
    }
    slide[slideIndex - 1].style.display = "flex";
}