const API_KEY = "66d6f719006bfbe2e64f4941";
const contactList = document.querySelector(".contact-list");

getContacts();

async function getContacts() {
  const contacts = await fetch(`https://${API_KEY}.mockapi.io/contacts`).then(
    (data) => data.json()
  );

  addMarkupToTheContactList(contacts);
}

function addMarkupToTheContactList(contacts) {
  const contactsMarkup = contacts
    .map(
      ({ number, age, name, image }) =>
        `<li class="card">
              <img class="card-picture" src="${image}" alt="${name}" />
              <div class="card-body">
                  <h2>${name}, ${age}</h2>
                  <span>${number}</span>
                  <button class="delete-button" type="button">
                       Delete 
                  </button>
              </div>
          </li>`
    )
    .join("");

  contactList.innerHTML = contactsMarkup;
}

export async function addContact(contact) {
  console.log(contact);

  await fetch(`https://${API_KEY}.mockapi.io/contacts`, {
    method: "POST",
    "Content-Type": "application/json",
    body: JSON.stringify(contact),
  });
}
