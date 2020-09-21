import './css/base.scss';

import domUpdates from '../src/domUpdates.js'

const startDate = document.querySelector('.start-date-box');
const duration = document.querySelector('.duration-box');
const travelerNum = document.querySelector('.traveler-count');
const cost = document.querySelector('.estimate-cost');
const submit = document.querySelector('.submit-btn');





window.onload = domUpdates.getTravelData();
