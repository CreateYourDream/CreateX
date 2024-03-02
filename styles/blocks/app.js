const dialogElem = document.querySelector("#mobileOverlay");
const burgerButton = document.querySelector("#burgerButton");

burgerButton.addEventListener("click", () => {
  dialogElem.showModal();
});

const requestOverlay = document.querySelector('#requestOverlay')
const submitRequestButton = document.querySelector('#submitRequest')

submitRequestButton.addEventListener('click', ()=>{
  requestOverlay.showModal()
}
  )