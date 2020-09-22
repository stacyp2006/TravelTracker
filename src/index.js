import './css/base.scss';
import moment from 'moment';

import domUpdates from '../src/domUpdates.js'

// const startDate = document.querySelector('.start-date-box');
// const duration = document.querySelector('.duration-box');
// const travelerNum = document.querySelector('.traveler-count');
const cost = document.querySelector('.estimate-cost');
const submit = document.querySelector('.submit-btn');

function validateInput() {
  let validated = true;
  const destinationMenu = document.querySelector('.destination-menu')
  const startDate = document.querySelector('.start-date-box');
  const duration = document.querySelector('.duration-box');
  const travelerNum = document.querySelector('.traveler-count');
  const destinationError = document.querySelector('.destination-error')
  const startDateError = document.querySelector('.date-error');
  const durationError = document.querySelector('.duration-error');
  const travelerNumError = document.querySelector('.travelers-error');
  destinationError.classList.add('hidden');
  startDateError.classList.add('hidden');
  durationError.classList.add('hidden');
  travelerNumError.classList.add('hidden');

  if (!destinationMenu.value) {
    destinationError.classList.remove('hidden');
    validated = false;
  }
  if (!moment(startDate.value)._isValid || moment(startDate.value).isBefore(moment(Date.now()))) {
    startDateError.classList.remove('hidden');
    validated = false;
  }
  if (!duration.value || typeof(+duration.value) !== 'number') {
    durationError.classList.remove('hidden');
    validated = false;
  }
  if (!travelerNum.value || typeof(+travelerNum.value) !== 'number') {
    travelerNumError.classList.remove('hidden');
    validated = false;
  }
  if (validated) {
    buildTrip(destinationMenu.value, startDate.value, duration.value, travelerNum.value)
  }
}

function buildTrip(destination, date, duration, travelers) {
  let newTrip = {
    id: Date.now(),
    userID: domUpdates.traveler.id,
    destinationID: parseInt(destination),
    travelers: parseInt(travelers),
    date: moment(date).format('YYYY/MM/DD'),
    duration: parseInt(duration),
    status: "pending"
  }
}


window.onload = domUpdates.getTravelData();
cost.addEventListener('click', validateInput);
// submit.addEventListener('click', );
