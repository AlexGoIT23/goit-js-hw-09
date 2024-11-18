const KEY = 'feedback-form-state';

const formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');
const inputEmail = document.querySelector('input');
const inputMessage = document.querySelector('textarea');

form.addEventListener('input', evt => {
  const { name, value } = evt.target;
  formData[name] = value.trim();
  localStorage.setItem(KEY, JSON.stringify(formData));
});

form.addEventListener('submit', evt => {
  evt.preventDefault();
  if (!formData.email || !formData.message) {
    alert('All form fields must be filled in');
    return;
  }
  console.log(formData);
  localStorage.removeItem(KEY);
  form.reset();
});
