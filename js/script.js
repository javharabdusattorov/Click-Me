// ALL BUTTONS
let elBtnOne = document.querySelector('.header__btnOne');
let elBtnTwo = document.querySelector('.header__btnTwo');
let elBtnThree = document.querySelector('.header__btnThree');
let elBtnFour = document.querySelector('.header__btnFour');
let elBtnFive = document.querySelector('.header__btnFive');

let elSectionS = document.querySelector('section')
let elSection = document.querySelector('.section__main');
let elResultHeading = document.querySelector('.result__heading');
// Fist Btn Class
let elFirstBtnSun = document.querySelector('.fistBtnSun');
let elFirstBtnImg = document.querySelector('.fistBtnImg');
let elFirstBtnMoon = document.querySelector('.fistBtnMoon');
// Second Btn Class
let elHour = document.querySelector('.clock');
// Thirt Btn Class
let elBtnThreeBox = document.querySelector('.btn__three');
let elBtnThreeImg = document.querySelector('.btn__three-img');
// Fourth Btn Class
let elFourthBtnCarousel = document.querySelector('.btn__four')

// 1
elBtnOne.addEventListener('click', function() {
    elResultHeading.classList.add('none');
    elResultHeading.classList.remove('flex');
    elBtnOne.textContent = "Nature";
    elBtnOne.classList.add('letter')

    elSection.classList.add('firstBtnSection');
    elSection.classList.remove('section__main');

    elFirstBtnSun.classList.add('sun');
    elFirstBtnImg.classList.add('section__image');
    elFirstBtnMoon.classList.add('moon');
    
    elFirstBtnSun.classList.add('flex');
    elFirstBtnImg.classList.add('flex');
    elFirstBtnMoon.classList.add('flex');

    elHour.classList.remove('flex');
    elBtnThreeBox.classList.remove('flex');
    elBtnThreeImg.classList.remove('flex');
    elBtnThreeBox.classList.remove('thirtBtnSection');
    elFourthBtnCarousel.classList.remove('flex');
    elSectionS.classList.remove('section__main');
});

// 2
elBtnTwo.addEventListener('click', function() {
    elBtnTwo.textContent = "Clock"

    elResultHeading.classList.add('flex');
    elResultHeading.textContent = "Welcome MY clock";
    elResultHeading.style.color = "aliceblue";
    elResultHeading.style.justifyContent = "center";

    elHour.classList.add('flex');
    elSection.classList.add('secondBtnSection');
    elSection.classList.remove('firstBtnSection');

    // Remove
    elFirstBtnSun.classList.remove('flex');
    elFirstBtnImg.classList.remove('flex');
    elFirstBtnMoon.classList.remove('flex');
    elFirstBtnSun.classList.remove('sun');
    elFirstBtnImg.classList.remove('section__image');
    elFirstBtnMoon.classList.remove('moon');
    elBtnThreeBox.classList.remove('flex');
    elBtnThreeImg.classList.remove('flex');
    elBtnThreeBox.classList.remove('thirtBtnSection');
    elFourthBtnCarousel.classList.remove('flex');
    elSection.classList.remove('section__main');
    elSectionS.classList.remove('section__main');
})

// 3
elBtnThree.addEventListener('click', function () {
    elBtnThree.textContent = "Airpot";

    elBtnThreeBox.classList.add('flex');
    elBtnThreeImg.classList.add('flex');
    elBtnThreeBox.classList.add('thirtBtnSection')

    // Remove
    elResultHeading.classList.add('none');
    elResultHeading.classList.remove('flex');

    elHour.classList.remove('flex');
    elSection.classList.remove('secondBtnSection');
    elSection.classList.remove('firstBtnSection');

    elFirstBtnSun.classList.remove('flex');
    elFirstBtnImg.classList.remove('flex');
    elFirstBtnMoon.classList.remove('flex');
    elFirstBtnSun.classList.remove('sun');
    elFirstBtnImg.classList.remove('section__image');
    elFirstBtnMoon.classList.remove('moon');
    elFourthBtnCarousel.classList.remove('flex');
    elSection.classList.remove('section__main');
    elSectionS.classList.remove('section__main');
})

// 4
elBtnFour.addEventListener('click', function() {
    elBtnFour.textContent = "Carousel";
    elFourthBtnCarousel.classList.add('flex');

    // Remove
    elSection.classList.remove('section__main');
    elResultHeading.classList.add('none');
    elFirstBtnSun.classList.remove('flex');
    elFirstBtnImg.classList.remove('flex');
    elFirstBtnMoon.classList.remove('flex');
    elFirstBtnSun.classList.remove('sun');
    elFirstBtnImg.classList.remove('section__image');
    elFirstBtnMoon.classList.remove('moon');
    elBtnThreeBox.classList.remove('flex');
    elBtnThreeImg.classList.remove('flex');
    elBtnThreeBox.classList.remove('thirtBtnSection');
    elSection.classList.remove('section__main');
    elSectionS.classList.remove('section__main');
})

// 5
elBtnFive.addEventListener('click', function() {
    elBtnFive.textContent = "First button";
    elSection.classList.add('section__main');
    elSectionS.classList.add('section__main');
    elResultHeading.classList.add('flex');
    elResultHeading.textContent = "Tank You!!!";
    elResultHeading.style.justifyContent = "center";

    elFirstBtnSun.classList.remove('flex');
    elFirstBtnImg.classList.remove('flex');
    elFirstBtnMoon.classList.remove('flex');
    elFirstBtnSun.classList.remove('sun');
    elFirstBtnImg.classList.remove('section__image');
    elFirstBtnMoon.classList.remove('moon');
    elBtnThreeBox.classList.remove('flex');
    elBtnThreeImg.classList.remove('flex');
    elBtnThreeBox.classList.remove('thirtBtnSection');
    elFourthBtnCarousel.classList.remove('flex');
})