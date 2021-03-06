import './css/base.scss';

import domUpdates from '../src/domUpdates.js'

const cost = document.querySelector('.estimate-cost');
const submit = document.querySelector('.submit-btn');
const login = document.querySelector('.login-button');

cost.addEventListener('click', domUpdates.validateInput);
submit.addEventListener('click', domUpdates.submitAction);
login.addEventListener('click', domUpdates.validateLogin);
