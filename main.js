import "reset-css";
const API_KEY = "66d6f719006bfbe2e64f4941";
const contactList = document.querySelector(".contact-list");

getContacts();

async function getContacts() {
  const users = await fetch(`https://${API_KEY}.mockapi.io/users`).then(
    (data) => data.json()
  );

  addMarkupToTheContactList(users);
}

function addMarkupToTheContactList(users) {
  const usersMarkup = users
    .map(
      ({ number, age, name, image }) =>
        `<li class="card">
            <img class="card-picture" src="${image}" alt="${name}" />
            <div class="card-body">
                <h2>${name}, ${age}</h2>
                <span>${number}</span>
            </div>
        </li>`
    )
    .join("");

  contactList.innerHTML = usersMarkup;
}
