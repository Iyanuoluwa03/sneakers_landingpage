// set initial count

let count = 0;

const number = document.querySelector('.num');
const signs = document.querySelectorAll('.sign');


signs.forEach(function(sign){
    sign.addEventListener('click', function(e){
        const result = e.currentTarget.classList;
        if( result.contains('minus')){
            count--;
        }
      
        else if(result.contains('plus')){
            count++

        }

        else{
            count == 0;
        }


        if(count > 0){
            number.style.color = "green";
        }

        else if(count < 0){
            number.style.color = "brown";
        }

        if(count ==  0){
            number.style.color = '#222';
        }

        console.log(result);


        number.textContent = count;
    })
    
});








// let images = document.querySelectorAll('.imgs')

// let activeImg = document.querySelector('.active');
// let buttonRight = document.querySelector("#slideRight");
// let buttonLeft = document.querySelector("#slideLeft");


let slideIndex = 1;
showSlides(slideIndex);



// next/prev

function plusSlides(n){
    showSlides(slideIndex += n);
}


//  image control

function currentSlide(n){
    showSlides(slideIndex = n);
}



function showSlides(n){
    let i;
    let slides = document.getElementsByClassName('mySlides');
    let images = document.getElementsByClassName('imgs');

    if (n > slides.length){
        slideIndex = 1
    }

    if (n < 1) {
        slideIndex = slides.length
    }


    for (i = 0; i < slides.length; i++){
        slides[i].style.display = 'none';
    }


    for (i = 0; i < images.length; i++) {
        images[i].className = images[i].className.replace(" active", "");

    }


    slides[slideIndex-1].style.display = "block";
    images[slideIndex-1].className += " active";
}


















// for (var i=0; i<images.length; i++){
//     images[i].addEventListener('mouseover', function(){
//         // console.log('help')
//         if(activeImg.length > 0){
//             activeImg[0].classList.remove("active");
//         }

//         this.classList.add('active')
//         document.getElementById('featured').src = this.src
//     })
// };




// let {images: pic1, pic2, pic3, pic4} = images;

// let mainImg = document.getElementById('featured');
 
// let mainPic = 0;
// buttonRight.addEventListener('click', function(){
//     for(let i=1; i<5; i++){
//         mainPic += 1;
//         imgs.src = `./img ${mainPic}.jpg`;
//         console.log('yeah')
//     }
// })




