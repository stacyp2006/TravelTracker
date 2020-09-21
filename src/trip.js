import moment from 'moment';

class Trip {
  constructor(tripData) {
    this.id = tripData.id;
    this.userID = tripData.userID;
    this.destinationID = tripData.destinationID;
    this.travelers = tripData.travelers;
    this.date = tripData.date;
    this.duration = tripData.duration;
    this.status = tripData.status;
  }

  calculateTripCost(destinations) {
    let tripCost = destinations.reduce((cost, destination) => {
      if (this.destinationID === destination.id) {
        cost = (1.1 * (this.travelers * ((this.duration * destination.estimatedLodgingCostPerDay) + destination.estimatedFlightCostPerPerson)));
      }
      return cost
    }, 0)
    return parseFloat(tripCost.toFixed(0));
  }

  findTripName(destinations) {
    let tripName = destinations.find(location => this.destinationID === location.id
    )
    return tripName.destination
  }
}

export default Trip
