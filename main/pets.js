import data from "../data.json" assert { type: "json" };

const firstPage = document.querySelector('.first-page');
const arrowLeft = document.querySelector('.arrow-left');
const numberPage = document.querySelector('.number-page');
const arrowRight = document.querySelector('.arrow-right');
const lastPage = document.querySelector('.last-page');

const imgPet = Array.from(
  document.querySelectorAll('.our-friends__pets__item img')
);
const namePet = Array.from(
  document.querySelectorAll('.our-friends__pets__item p')
);

let currentIndex = 0;

function shuffle() {
  if (numberPage.textContent === '1') {
    return;
  }

  const shuffledIndexes = Array.from({ length: imgPet.length }, (_, index) => index);
  shuffledIndexes.sort(() => Math.random() - 0.5);

  currentIndex = 0;

  shuffledIndexes.forEach((newIndex, i) => {
    imgPet[i].src = data[newIndex].img;
    namePet[i].textContent = data[newIndex].name;
  });
}

let x = 1;
numberPage.textContent = x;

function numberIncreas() {
  if (x < 16) {
    x += 1;
    numberPage.textContent = x;
  } else {
    return;
  }
  shuffle();
}

function numberDecreas() {
  if (x > 1) {
    x -= 1;
    numberPage.textContent = x;
  } else {
    return;
  }
  shuffle();
}

arrowRight.addEventListener('click', () => {
  numberIncreas();
  changeArrowColor();
});

arrowLeft.addEventListener('click', () => {
  numberDecreas();
  changeArrowColor();
});

function showLastPage() {
  if (x === 16) {
    return;
  } else {
    x = 16;
    numberPage.textContent = x;
  }
  shuffle();
}

function showFirstPage() {
  if (x === 1) {
    return;
  } else {
    x = 1;
    numberPage.textContent = x;
  }
  shuffle();
}


// ... Ваш остальной JavaScript код ...

arrowLeft.addEventListener('click', () => {
  numberDecreas();
  changeArrowColor();
});


function changeArrowColor() {
  if (x !== 1) {
    arrowLeft.classList.add('active');
    firstPage.classList.add('active');
  } else {
    arrowLeft.classList.remove('active');
    firstPage.classList.remove('active');
  }
}



firstPage.addEventListener('click', () => {
  showFirstPage();
  changeArrowColor();
});

lastPage.addEventListener('click', () => {
  showLastPage();
  changeArrowColor();
});

// Инициализация при загрузке страницы
shuffle();
changeArrowColor();

//////////////////////////////////////////////
let popup = document.querySelector(".popup");
let popupContainer = document.querySelector(".popup-container");


//////////////КНОПКИ
let firstPopup = document.querySelector(".katrine");
firstPopup.addEventListener("click", () => console.log(123));
let secondPopup = document.querySelector(".jennifer");
let thirdPopup = document.querySelector(".woody");
////////////////

let closepopup = document.querySelector(".popup-close");
let popupImg = document.querySelector(".popup__img");
let popupPetName = document.querySelector(".popup-container-text-name");
let popupPetTypeBreed = document.querySelector(".popup-container-text-type-breed");
let popupPetDescription = document.querySelector(".poput-container-text-description");
let popupAge = document.querySelector(".popup__pet-age");
let popupInoculations = document.querySelector(".popup__pet-inoculations ");
let popupDiseases = document.querySelector(".popup__pet-diseases ");
let popupParasites = document.querySelector(".popup__pet-parasites ");

closepopup.addEventListener("click", () => {
  popup.classList.remove("active");
  popupContainer.classList.remove("active");
});

document.addEventListener("click", (e) => {
  if (e.target === popup) {
    popup.classList.remove("active");
    popupContainer.classList.remove("active");
  }
});


/////////////////////////////////////// Функций которая открывает боксы
function openPopup() {
  popup.classList.add("active");
  openFirstPopup();
}
function openPopupTwo() {
  popup.classList.add("active");
  openSecondPopup();
}
function openPopupThree() {
  popup.classList.add("active");
  openThirdPopup();
}

/////////////////////////////////////////

firstPopup.addEventListener("click", openPopup);

secondPopup.addEventListener("click", openPopupTwo);

thirdPopup.addEventListener("click", openPopupThree);

/////////////////////////////////////////

function openFirstPopup() {
  popupImg.src = data[index].img;
  popupPetName.textContent = data[index].name;
  popupPetTypeBreed.textContent = `${data[index].type} - ${data[index].breed}`;
  popupPetDescription.textContent = data[index].description;
  popupAge.textContent = data[index].age;
  popupInoculations.textContent = data[index].inoculations;
  popupDiseases.textContent = data[index].diseases;
  popupParasites.textContent = data[index].parasites;
}

function openSecondPopup() {
  popupImg.src = data[index + 1].img;
  popupPetName.textContent = data[index + 1].name;
  popupPetTypeBreed.textContent = `${data[index + 1].type} - ${data[index + 1].breed}`;
  popupPetDescription.textContent = data[index + 1].description;
  popupAge.textContent = data[index + 1].age;
  popupInoculations.textContent = data[index + 1].inoculations;
  popupDiseases.textContent = data[index + 1].diseases;
  popupParasites.textContent = data[index + 1].parasites;
}

function openThirdPopup() {
  popupImg.src = data[index + 2].img;
  popupPetName.textContent = data[index + 2].name;
  popupPetTypeBreed.textContent = `${data[index + 2].type} - ${data[index + 2].breed}`;
  popupPetDescription.textContent = data[index + 2].description;
  popupAge.textContent = data[index + 2].age;
  popupInoculations.textContent = data[index + 2].inoculations;
  popupDiseases.textContent = data[index + 2].diseases;
  popupParasites.textContent = data[index + 2].parasites;
}

///////////////////////////////
