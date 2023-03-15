const openButton = document.querySelector("#openOverlay");
const newButton = document.querySelector("#newButton");
const body = document.body;
const successModal = createModal("The message has been sent, thank you!");

openButton.addEventListener("click", (e) => {
  body.appendChild(successModal);
});

newButton.addEventListener("click", (e) => {
  body.appendChild(createModal("New message!"));
});

function createModal(content) {
  const overlayElement = document.createElement("div");
  overlayElement.classList.add("overlay");

  overlayElement.addEventListener("click", (e) => {
    if (!e.target.classList.contains("content")) {
      closeElement.click();
    }
  });

  const containerElement = document.createElement("div");
  containerElement.classList.add("modal-container");

  const contentElement = document.createElement("div");
  contentElement.classList.add("content");

  contentElement.innerHTML = content;

  const closeElement = document.createElement("a");
  closeElement.classList.add("close");
  closeElement.textContent = "x";
  closeElement.href = "#";

  closeElement.addEventListener("click", (e) => {
    e.preventDefault();
    body.removeChild(overlayElement);
  });

  overlayElement.appendChild(containerElement);
  containerElement.appendChild(closeElement);
  containerElement.appendChild(contentElement);

  return overlayElement;
}

