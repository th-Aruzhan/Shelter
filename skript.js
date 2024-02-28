import pets from "./data.json" assert { type : "json"};

console.log(pets);

const imgPetOne = document.querySelector(".pets-katrine");
const namePetOne = document.querySelector(".name-Katrine");
const imgPetTwo = document.querySelector(".pets-jennifer");
const namePetTwo = document.querySelector(".name-Jennifer");
const imgPetThree = document.querySelector(".pets-woody");
const namePetThree = document.querySelector(".name-Woody");

let index = 0;

function displayPets() {
imgPetOne.src = pets[index].img;
namePetOne.textContent = pets[index].name;

imgPetTwo.src = pets[index + 1].img;
namePetTwo.textContent = pets[index + 1].name;

imgPetThree.src = pets[index + 2].img;
namePetThree.textContent = pets[index + 2].name;
}

/////////////////////// Right

const arrowRight = document.querySelector(".arrow-right");
arrowRight.addEventListener("click", showNextPets);

function showNextPets() {
index++;
displayPets();
}

///////////////////////// Left

const arrowLeft = document.querySelector(".arrow-left");
arrowLeft.addEventListener("click", showBackPets);

function displayBackPets() {
imgPetOne.src = pets[index].img;
namePetOne.textContent = pets[index].name;

imgPetTwo.src = pets[index - 1].img;
namePetTwo.textContent = pets[index - 1].name;

imgPetThree.src = pets[index - 2].img;
namePetThree.textContent = pets[index - 2].name;
}

function showBackPets() {
index--;
displayBackPets();
}

//////////////////////////////////// * MODAL

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



// let currentIndex = 0
// const LeftButton = document.querySelector(".left-button");
// const cards = document.querySelectorAll(".our-friends__pets");
// const RightButton = document.querySelector(".right-button");

// function showCards() {
//   for (let i = 0; i < cards.length; i++) {
//     if (i >= currentIndex && i < currentIndex + 3) {
//       cards[i].style.display = "block";
//     } else {
//       cards[i].style.display = "none";
//     }
//   }
// }

// function showNext() {
//   if (currentIndex + 3 < cards.length) {
//     currentIndex = currentIndex + 1;
//   } else {
//     currentIndex = 0;
//   }
//   showCards();
// }

// function showPrevious() {
//   if (currentIndex > 0) {
//     currentIndex = currentIndex - 1;
//   } else {
//     currentIndex = cards.length - 3;
//   }
//   showCards();
// }

// LeftButton.addEventListener("click", showPrevious);
// RightButton.addEventListener("click", showNext);

// showCards();