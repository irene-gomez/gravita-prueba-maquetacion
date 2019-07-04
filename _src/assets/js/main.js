'use strict';

const btnSubmitEl = document.querySelector('.btn__submit');

function handleButtonClick() {
  location.href = '/dashboad.html';
}

btnSubmitEl.addEventListener('click', handleButtonClick);