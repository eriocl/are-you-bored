import createAlertFail from '/js/createAlertFail.js';

const createUserForm = document.forms.createUser;
createUserForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(createUserForm));
  const response = await fetch('/users', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  if (response.ok) {
    window.location = '/';
  } else {
    createAlertFail();
  }
});
