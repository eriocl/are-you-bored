import createAlertFail from '/js/createAlertFail.js';

const loginUserForm = document.forms.login;
loginUserForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(loginUserForm));
  const response = await fetch('/users/login', {
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
