// Get DOM Elements
const modal = document.querySelector("#modal");
const modalContainer = document.querySelector(".redink-modal-container");
const submitBtn = document.querySelector(".submit");
const declineBtn = document.querySelector(".decline");
// Events
submitBtn.addEventListener("click", closeModalOne);
submitBtn.addEventListener("click", setCookie);
declineBtn.addEventListener("click", redirect);

checkACookieExists();

// Close Modal One
function closeModalOne() {
  modal.classList.remove("modal-show");
  modalContainer.classList.remove("modal-show");
  setCookie();
}

function setCookie() {
  document.cookie = "disclaimer";
}
function checkACookieExists() {
  if (
    document.cookie
      .split(";")
      .some((item) => item.trim().startsWith("disclaimer"))
  ) {
    console.log("disclaimer is set");
    modal.classList.remove("modal-show");
    modalContainer.classList.remove("modal-show");
  } else {
    modal.classList.add("modal-show");
    modalContainer.classList.add("modal-show");
  }
}

//Redirect
function redirect() {
  window.location = "/access-denied";
}
console.log(document.cookie);
