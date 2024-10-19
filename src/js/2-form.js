'use strict';
let formData = { email: '', message: '' };
const form = document.querySelector('.feedback-form');
const formDataLS = localStorage.getItem('feedback-form-state');

if (formDataLS) {
  formData = JSON.parse(formDataLS);
  form.elements.email.value = formData.email ? formData.email : '';
  form.elements.message.value = formData.message ? formData.message : '';
}

form.addEventListener('input', formMemory);
form.addEventListener('submit', formSubmit);

function formMemory(event) {
  formData[event.target.name] = event.target.value.trim();
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function formSubmit(event) {
  event.preventDefault();
  if (Object.values(formData).some(item => item === '')) {
    alert('Fill please all fields');
    return;
  }
  console.log('formData: ', formData);
  localStorage.removeItem('feedback-form-state');
  formData = {};
  event.currentTarget.reset();
}
