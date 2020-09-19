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

  findPastTrips() {
    let oldTrips = this.allTrips.filter(trip => {
      return trip.status !== 'pending' && Date.parse(trip.date) <= Date.now()
    })
    this.pastTrips = oldTrips;
  }

  findUpcomingTrips() {
    let upcomingTrips = this.allTrips.filter(trip => {
      return trip.status !== 'pending' && Date.parse(trip.date) >= Date.now()
    })
    this.upcomingTrips = upcomingTrips;
  }

  findPendingTrips() {
    let pendingTrips = this.allTrips.filter(trip => {
      return trip.status === 'pending'
    })
    this.pendingTrips = pendingTrips;
  }



}


export default Traveler
