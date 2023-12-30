const form = document.querySelector('.feedback-form');

const savedData = localStorage.getItem('feedback-form-state');
if (savedData) {
  const { email, message } = JSON.parse(savedData);
  form.elements.email.value = email;
  form.elements.message.value = message;
}

form.addEventListener('input', function (event) {
  if (event.target.tagName === 'INPUT' || event.target.tagName === 'TEXTAREA') {
    const currentState =
      JSON.parse(localStorage.getItem('feedback-form-state')) || {};
    currentState[event.target.name] = event.target.value.trim();
    localStorage.setItem('feedback-form-state', JSON.stringify(currentState));
  }
});

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const email = form.elements.email.value.trim();
  const message = form.elements.message.value.trim();
  console.log({ email, message });
  localStorage.removeItem('feedback-form-state');
  form.reset();
});
