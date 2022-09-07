const codeBridgeCards = [
  {
    name: "Data Output 1",
    link: "../images/output1.png",
  },
  {
    name: "Data Output 2",
    link: "../images/output2.png",
  },
  {
    name: "Data Output 3",
    link: "../images/output3.png",
  },
  {
    name: "Data Output 4",
    link: "../images/output4.png",
  },
  {
    name: "Data Output 5",
    link: "../images/output5.png",
  },
];

const imagePreview = document.querySelector("#image_preview");
const profileEditPopup = document.querySelector(".popup");
const editForm = document.querySelector(".popup__form");
const cardListEl = document.querySelector(".card-list");

const previewCloseButton = document.querySelector("#image_preview-close");
previewCloseButton.addEventListener("click", function () {
  closePopup(imagePreview);
});

function closePopup(popup) {
  popup.classList.remove("popup_is-opened");
}

function openPopup(popup) {
  popup.classList.add("popup_is-opened");
}
const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;

codeBridgeCards.reverse().forEach((cardData) => {
  const card = createCard(cardData);
  renderCard(card, cardListEl);
});

function renderCard(card, container) {
  container.prepend(card);
}

const linkInput = document.querySelector("#image-input");
const titleInput = document.querySelector("#title-input");

function createCard(cardData) {
  const cardEl = cardTemplate.cloneNode(true);
  const imageEl = cardEl.querySelector(".card__image");

  imageEl.addEventListener("click", function () {
    const popupImage = imagePreview.querySelector(".popup__image");
    const popupImageTitle = imagePreview.querySelector(".popup__image-title");
    popupImageTitle.textContent = cardData.name;
    popupImage.src = cardData.link;
    popupImage.alt = cardData.name;
    openPopup(imagePreview);
  });

  const titleEl = cardEl.querySelector(".card__text");

  imageEl.src = cardData.link;

  imageEl.alt = cardData.name;

  titleEl.textContent = cardData.name;

  return cardEl;
}
