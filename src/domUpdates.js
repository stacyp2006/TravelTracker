import moment from 'moment'
import Traveler from '../src/traveler.js'
import Trip from '../src/trip.js'
import Destination from '../src/destination.js'

let domUpdates = {

  travelers: [{}],
  traveler: {},
  trips: {},
  destinations: [{}],

  getTravelData: () => {
    Promise.all([
      fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/travelers/travelers'),
      fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/trips/trips'),
      fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/destinations/destinations')
    ])
      .then(responses => Promise.all(responses.map(response => response.json())))
      .then(responses => {
        domUpdates.travelers = responses[0].travelers;
        domUpdates.trips = responses[1].trips;
        domUpdates.destinations = responses[2].destinations;
        domUpdates.getTraveler();
        domUpdates.updateDisplay();
      })
      .catch(error => console.log(error))
  },

  updateDisplay: () => {
    domUpdates.greetUser();
    domUpdates.getDestinations();
    domUpdates.getTotalSpent();
    domUpdates.displayPendingTrips();
    domUpdates.displayCurrentTrip();
    domUpdates.displayPastTrips();
    domUpdates.displayUpcomingTrips();
  },

  getTraveler: () => {
    domUpdates.traveler = new Traveler(domUpdates.travelers[47], domUpdates.trips, domUpdates.destinations)
    domUpdates.traveler.findAllTrips(domUpdates.trips);
  },

  greetUser: () => {
    const welcomeMessage = document.querySelector('.greeting');
    welcomeMessage.innerText = `Welcome, ${domUpdates.traveler.name}!`;
  },

  getDestinations: () => {
    const destinationMenu = document.querySelector('.destination-menu');
    if (domUpdates.destinations.length > 0) {
      domUpdates.destinations.forEach(destination => {
        destinationMenu.insertAdjacentHTML('beforeend', `<option value="${destination.id}">${destination.destination}</option>`)
      })
    }
  },

  getTotalSpent: () => {
    const travelTotal = document.querySelector('.travel-total');
    const userTotal = domUpdates.traveler.calculateTravelBudget(domUpdates.destinations)
    travelTotal.innerText = `$ ${userTotal}`
  },

  displayPendingTrips: () => {
    const pending = document.querySelector('.pending-trips');
    domUpdates.traveler.findPendingTrips();
    if (domUpdates.traveler.pendingTrips.length === 0) {
      pending.insertAdjacentHTML('beforeend', `<h4 class="pending-list">You have no pending trips!</h4>`)
    } else {
      domUpdates.traveler.pendingTrips.forEach(trip => {
        let name = domUpdates.destinations[trip.destinationID - 1].destination;
        pending.insertAdjacentHTML('beforeend', `<h4 class="pending-list">${name}<br>${trip.date}</h4>`)
      })
    }
  },

  // findTripInfo:(trip) => {
  //   let name = domUpdates.destinations[trip.destinationID - 1].destination;
  //   let image = domUpdates.destinations[trip.destinationID - 1].image;
  //   let alt = domUpdates.destinations[trip.destinationID - 1].alt;
  //   return name, image, alt
  // },

  displayCurrentTrip: () => {
    const currentTrip = document.querySelector('.current-trip');
    const welcome = document.querySelector('.welcome');
    domUpdates.traveler.findCurrentTrip();
    if (domUpdates.traveler.currentTrip === undefined) {
      welcome.innerText =
      `Welcome Home!

      Ready to Wander?`;
    } else {
      let trip = new Trip(domUpdates.traveler.currentTrip)
      let name = domUpdates.destinations[trip.destinationID - 1].destination;
      let image = domUpdates.destinations[trip.destinationID - 1].image;
      let alt = domUpdates.destinations[trip.destinationID - 1].alt;
      welcome.innerText = `Welcome to ${name}`;
      currentTrip.insertAdjacentHTML('beforeend', `<img class='trip-picture' src='${image}' alt='${alt}'><br><h4 class="current-display">Date: ${trip.date}<br>Duration: ${trip.duration} days<br>Traveling Party: ${trip.travelers} people</h4>`)
    }
  },

  displayPastTrips: () => {
    const pastTrips = document.querySelector('.past-trips');
    const pastLabel = document.querySelector('.past-label');
    domUpdates.traveler.findPastTrips();
    if (domUpdates.traveler.pastTrips.length === 0) {
      pastLabel.innerText =
      `Past Wanders

      No past wanders to display`;
    } else {
      domUpdates.traveler.pastTrips.forEach(trip => {
        let name = domUpdates.destinations[trip.destinationID - 1].destination;
        let image = domUpdates.destinations[trip.destinationID - 1].image;
        let alt = domUpdates.destinations[trip.destinationID - 1].alt;
        pastTrips.insertAdjacentHTML('beforeend', `<img class='trip-picture' src='${image}' alt='${alt}'><br><h4 class="current-display">Date: ${trip.date}<br>Duration: ${trip.duration} days<br>Traveling Party: ${trip.travelers} people</h4>`)
      })
    }
  },

  displayUpcomingTrips: () => {
    const upcomingTrips = document.querySelector('.upcoming-trips');
    const upcomingLabel = document.querySelector('.upcoming-label');
    domUpdates.traveler.findUpcomingTrips();
    if (domUpdates.traveler.upcomingTrips.length === 0) {
      upcomingLabel.innerText =
      `Upcoming Wanders

      No upcoming wanders to display.

      Ready to Wander?`;
    } else {
      domUpdates.traveler.upcomingTrips.forEach(trip => {
        let name = domUpdates.destinations[trip.destinationID - 1].destination;
        let image = domUpdates.destinations[trip.destinationID - 1].image;
        let alt = domUpdates.destinations[trip.destinationID - 1].alt;
        upcomingTrips.insertAdjacentHTML('beforeend', `<img class='trip-picture' src='${image}' alt='${alt}'><br><h4 class="current-display">Date: ${trip.date}<br>Duration: ${trip.duration} days<br>Traveling Party: ${trip.travelers} people</h4>`)
      })
    }
  },

  validateInput: () => {
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
      let newTrip = domUpdates.buildTrip(destinationMenu.value, startDate.value, duration.value, travelerNum.value);
      let newTripCost = domUpdates.calculateTripCost(newTrip, domUpdates.destinations);
      requestedCost.innerText = `This trip is estimated to cost $${newTripCost}`
      requestedCost.classList.remove('hidden');
    }
  },

  buildTrip: (destination, date, duration, travelers) => {
    let newTrip = {
      id: Date.now(),
      userID: domUpdates.traveler.id,
      destinationID: parseInt(destination),
      travelers: parseInt(travelers),
      date: moment(date).format('YYYY/MM/DD'),
      duration: parseInt(duration),
      status: "pending",
      suggestedActivities: []
    }
    return newTrip
  },

  calculateTripCost: (newTrip, destinations) => {
    let tripCost = domUpdates.destinations.reduce((cost, destination) => {
      if (newTrip.destinationID === destination.id) {
        cost = (1.1 * (newTrip.travelers * ((newTrip.duration * destination.estimatedLodgingCostPerDay) + destination.estimatedFlightCostPerPerson)));
      }
      return cost
    }, 0)
    return parseFloat(tripCost.toFixed(0));
  }
}


export default domUpdates
