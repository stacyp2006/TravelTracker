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
        domUpdates.getDestinations();
        console.log(domUpdates.traveler);
      })
      .catch(error => console.log(error))
  },

  getTraveler: () => {
    domUpdates.traveler = new Traveler(domUpdates.travelers[47], domUpdates.trips, domUpdates.destinations)
  },
  // updateDisplay: () => {
  //   domUpdates.greetUser();
  //   domUpdates.getDestinations();
  // },

  // greetUser: () => {
  //   const welcomeMessage = document.querySelector('.greeting');
  //   welcomeMessage.innerText = `Welcome ${domUpdates.traveler.name}!`;
  // },

  getDestinations: () => {
    const destinationMenu = document.querySelector('.destination-menu');
    if (domUpdates.destinations.length > 0) {
      domUpdates.destinations.forEach(destination => {
        destinationMenu.insertAdjacentHTML('beforeend', `<option value="${destination.id}">${destination.destination}</option>`)
      })
    }
  }

}


export default domUpdates
