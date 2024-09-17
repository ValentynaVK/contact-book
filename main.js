import "reset-css";
import { addContact } from "./services/api.js";

const btnOpen = document.querySelector(".open-btn");
const btnClose = document.querySelector(".close-btn");

const handleShowModal = () => {
  document.body.classList.toggle("is-modal-open");
};

btnOpen.addEventListener("click", handleShowModal);
btnClose.addEventListener("click", handleShowModal);

const form = document.querySelector(".add-contact-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const contact = {
    name: form.elements.name.value,
    age: form.elements.age.value,
    number: form.elements.number.value,
    image: form.elements.image.value,
  };

  addContact(contact);

  form.reset();
});
