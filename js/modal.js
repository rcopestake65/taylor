// Get DOM Elements
const modal = document.querySelector("#modal");
const modalContainer = document.querySelector(".redink-modal-container");
// const modalTwo = document.querySelector("#modal-2");
// const modalThree = document.querySelector("#modal-3");
// const modalBtn = document.querySelector("#modal-btn");
const submitBtn = document.querySelector(".submit");
// const submitBtnTwo = document.querySelector(".submit-two");
const declineBtn = document.querySelector(".decline");
// const goBackBtn = document.querySelector(".goback");

// Events
// modalBtn.addEventListener('click', openModal);
submitBtn.addEventListener("click", closeModalOne);
declineBtn.addEventListener("click", redirect);
// submitBtnTwo.addEventListener("click", closeModalTwo);
// declineBtn.addEventListener("click", openModalThree);
// goBackBtn.addEventListener("click", openModalOne);
// window.addEventListener('click', outsideClick);

// Close Modal One
function closeModalOne() {
  modal.style.display = "none";
  modalContainer.style.display = "none";

  //   modalTwo.style.display = "block";
}
//Redirect
function redirect() {
  window.location = "/access-denied";
}

// Close Modal Two
// function closeModalTwo() {
//   modalTwo.style.display = "none";
// }
// Open Modal Three
// function openModalThree() {
//   modalThree.style.display = "block";
// }
// Open Modal One
// function openModalOne() {
//   modalThree.style.display = "none";
//   modalOne.style.display = "block";
// }
// Close If Outside Click
// function outsideClick(e) {
//   if (e.target == modal) {
//     modal.style.display = 'none';
//   }
// }
