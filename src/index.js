import './css/base.scss';
import moment from 'moment';
import Trip from '../src/trip.js'

import domUpdates from '../src/domUpdates.js'

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
  const requestedCost = document.querySelector('.new-trip-cost');
  requestedCost.classList.add('hidden');
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
  if (!duration.value || isNaN(duration.value)) {
    durationError.classList.remove('hidden');
    validated = false;
  }
  if (!travelerNum.value || isNaN(travelerNum.value)) {
    travelerNumError.classList.remove('hidden');
    validated = false;
  }
  if (validated) {
    let newTrip = buildTrip(destinationMenu.value, startDate.value, duration.value, travelerNum.value);
    let newTripCost = calculateTripCost(newTrip, domUpdates.destinations);
    requestedCost.innerText = `This trip is estimated to cost $${newTripCost}`
    requestedCost.classList.remove('hidden');
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
  return newTrip
}

function calculateTripCost(newTrip, destinations) {
  let tripCost = domUpdates.destinations.reduce((cost, destination) => {
    if (newTrip.destinationID === destination.id) {
      cost = (1.1 * (newTrip.travelers * ((newTrip.duration * destination.estimatedLodgingCostPerDay) + destination.estimatedFlightCostPerPerson)));
    }
    return cost
  }, 0)
  return parseFloat(tripCost.toFixed(0));
}


window.onload = domUpdates.getTravelData();
cost.addEventListener('click', validateInput);
// submit.addEventListener('click', );
