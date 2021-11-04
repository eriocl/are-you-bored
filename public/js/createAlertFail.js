export default function createAlertFail() {
  const formWrapper = document.querySelector('[data-form="wrapper"]');
  const previousAlert = document.querySelector('[data-alert]');
  previousAlert?.remove();
  const alert = `<div data-alert class="alert alert-danger alert-dismissible fade show text-center" role="alert">
  <strong>Something  goes wrong</strong>
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>`;
  formWrapper.insertAdjacentHTML('afterbegin', alert);
}
