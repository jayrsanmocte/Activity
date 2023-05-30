
// const element = document.getElementById('my-element');
// function fadeIn() {
//     element.classList.remove('fade-out');
//     element.classList.add('fade-in');
// }

// function fadeOut() {
//     element.classList.remove('fade-in');
//     element.classList.add('fade-out');
// }

// setTimeout(fadeIn, 1000);  // Fade in after 1 second
// setTimeout(fadeOut, 3000); // Fade out after 3 seconds

// const myImage = document.querySelector('#myImage');

// myImage.dispatchEvent(new Event('click'));{
//   myImage.style.opacity = 0;

//   setTimeout(() => {
//     myImage.src = 'headline1.png';
//     myImage.style.opacity = 1;
//         setTimeout(() => {
//         myImage.src = 'headline2.png';
//         myImage.style.opacity = 100;
//                 setTimeout(() => {
//                     myImage.src = 'subheadline.png';
//                     myImage.style.opacity = 1;
//                 },4000);

                    


//         },5000);
            


//      }, 3000); // change image after 1s

// };

let female = document.getElementById('female')
let headline1 = document.getElementById('headline1')
let headline2 = document.getElementById('headline2')
let learnmore = document.getElementById('learnmore')
let subheadline = document.getElementById('subheadline')
let logo = document.getElementById('logo')
let replay = document.getElementById('replay')



female.addEventListener('animationend', function(){
female.classList.remove('fade-in2')
female.classList.add('fade-out')
headline1.classList.remove('d-none')
headline1.classList.add('move')
headline2.classList.remove('d-none')
headline2.classList.add('fade-in3')
subheadline.classList.remove('d-none')
subheadline.classList.add('fade-in4')
learnmore.classList.remove('d-none')
learnmore.classList.add('fade-in5')
logo.classList.remove('d-none')
logo.classList.add('move1')
replay.classList.remove('d-none')
replay.classList.add('fade-in6')
});




