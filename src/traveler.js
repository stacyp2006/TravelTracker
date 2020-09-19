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

  addPastTrips() {
    let oldTrips = this.allTrips.filter(trip => {
      return Date.parse(trip.date) <= Date.now()
    })
    this.pastTrips = oldTrips;
  }

  
}


export default Traveler
