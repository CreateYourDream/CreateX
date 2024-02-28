const dialogElem = document.querySelector("#mobileOverlay");
const burgerButton = document.querySelector("#burgerButton");

burgerButton.addEventListener("click", () => {
  dialogElem.showModal();
});
