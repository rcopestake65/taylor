// Get DOM Elements
const modal = document.querySelector("#modal");
const modalContainer = document.querySelector(".redink-modal-container");
const submitBtn = document.querySelector(".submit");
const declineBtn = document.querySelector(".decline");

// Events
submitBtn.addEventListener("click", closeModalOne);
submitBtn.addEventListener("click", setCookie);
declineBtn.addEventListener("click", redirect);

//if cookie set
if (document.cookie) {
  modal.style.display = "none";
  modalContainer.style.display = "none";
}
// Close Modal One
function closeModalOne() {
  modal.style.display = "none";
  modalContainer.style.display = "none";
}
function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = "investors";
}
//Redirect
function redirect() {
  window.location = "/access-denied";
}
