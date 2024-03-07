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
  target === mobileOverlayCloseButton || target === mobileOverlay
    ? mobileOverlay.classList.remove("mobile-overlay-open")
    : "";
}

mobileOverlay.addEventListener("click", closeModal);
