import Traveler from '../src/traveler.js'
import Trip from '../src/trip.js'
import Destination from '../src/destination.js'

let domUpdates = {

  traveler: {},
  trip: {},
  destinations: [{}],

  getDestinations: () => {
    Promise.all([
      fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/destinations/destinations')
    ])
      .then(responses => Promise.all(responses.map(response => response.json())))
      .then(responses => {
        domUpdates.destinations = responses[0].destinations;
      })
      .catch(error => console.log(error))
  },
}


export default domUpdates
