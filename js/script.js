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




// Slider

// local data

const slides = [
  {
    id: 1,
    img: "./asset/images/sb.jpg",
  },

  {
    id: 2,
    img: "./asset/images/sb.jpg",
  },


   {
    id: 2,
    img: "./asset/images/sb.jpg",
  },
];

// select item

const imgs = document.getElementById("shoe-img");
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn')


// starting item

let firstItem = 0;



// load initial item


s = window.addEventListener('DOMContentLoaded', function(){
    showItem();
   
});



// show based on data

function showItem(){
const item = slides[firstItem];
imgs = item.img;

}
// show next item

nextBtn.addEventListener('click', function(){
    firstItem++;
    if(firstItem > slides.length-1){
        firstItem = 0
    };

    showItem()


})


