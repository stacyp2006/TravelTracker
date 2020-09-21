import Traveler from '../src/traveler.js'
import Trip from '../src/trip.js'
import Destination from '../src/destination.js'

let domUpdates = {

  traveler: {},
  trip: {},
  destinations: [{}],

  getTravelData: () => {
    Promise.all([
      fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/destinations/destinations')
    ])
      .then(responses => Promise.all(responses.map(response => response.json())))
      .then(responses => {
        domUpdates.destinations = responses[0].destinations;
        domUpdates.getDestinations();
      })
      .catch(error => console.log(error))

  },

  getDestinations: () => {
    const destinationMenu = document.querySelector('.destination-menu');
    // console.log("hello", domUpdates.destinations);
    if (domUpdates.destinations.length > 0) {
      domUpdates.destinations.forEach(destination => {
        destinationMenu.insertAdjacentHTML('beforeend', `<option value="${destination.id}">${destination.destination}</option>`)
      })
    }
  }

}


export default domUpdates
