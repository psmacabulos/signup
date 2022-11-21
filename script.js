const password1 = document.querySelector('#password1');
const password2 = document.querySelector('#password2');
const errorMsg = document.querySelector('.error');
const submit = document.querySelector('#submit');

submit.addEventListener('click', (e) => {
  e.preventDefault();
  password1.value != password2.value
    ? (errorMsg.style.visibility = 'visible')
    : (errorMsg.style.visibility = 'hidden');
});
