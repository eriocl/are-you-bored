const logoutRef = document.querySelector('#logout');
logoutRef.addEventListener('click', async (e) => {
  e.preventDefault();
  const response = await fetch('/users/logout', {
    method: 'POST',
  });
  if (response.ok) {
    window.location = '/';
  }
});
