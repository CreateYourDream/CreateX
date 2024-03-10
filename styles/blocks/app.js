
const mobileOverlay = document.querySelector("#mobileOverlay");
const burgerButton = document.querySelector("#burgerButton");
const mobileOverlayCloseButton = document.querySelector(
  ".mobile-overlay__close-button"
);

burgerButton.addEventListener("click", () => {
  mobileOverlay.classList.toggle("mobile-overlay-open");
});

function closeModal(event) {
  const target = event.target;
  target === mobileOverlayCloseButton || mobileOverlay
    ? mobileOverlay.classList.remove("mobile-overlay-open")
    : "";
}

mobileOverlay.addEventListener("click", closeModal);

///////requestOverlay/////////////

const requestOverlay = document.querySelector('.request-overlay')
const requestOverlayOpenButton = document.querySelector('.construction__body-actions-button')

requestOverlayOpenButton.addEventListener("click", () => {
  requestOverlay.classList.toggle("request-overlay-open");
});

function closeRequestOverlay(event) {
  const target = event.target;
  target === requestOverlay
    ? requestOverlay.classList.remove("request-overlay-open")
    : "";
}
requestOverlay.addEventListener("click", closeRequestOverlay);