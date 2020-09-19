class Traveler {
  constructor(travelerData, tripData) {
    this.id = travelerData.id;
    this.name = travelerData.name;
    this.travelerType = travelerData.travelerType;
    this.allTrips = [];
    this.pastTrips = [];
    this.currentTrip = {};
    this.upcomingTrips = [];
    this.pendingTrips = [];
  }

  findAllTrips(tripData) {
    let travelerTrips = tripData.filter(trip => {
      return this.id === trip.userID
    })
    this.allTrips = travelerTrips;
  }
  // addPastTrips(tripData) {
  //   let oldTrips = tripData.filter(trip => {
  //     return Date.parse(trip.date) <= Date.now()
  //   })
  //   this.pastTrips.push(oldTrips);
  // }
}


export default Traveler
