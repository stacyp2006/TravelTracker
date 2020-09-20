import moment from 'moment';

class Traveler {
  constructor(travelerData, tripData, destinations) {
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

  findCurrentTrip() {
    let today = moment()
    let currentTrip = this.allTrips.find(trip => {
      return trip.status === 'approved' && moment(new Date(trip.date)).isBefore(today) && moment(new Date(trip.date)).add(trip.duration, 'day').isAfter(today)
    })
    this.currentTrip = currentTrip;
  }

  calculateTravelBudget(destinations) {
    let year = moment('2020-01-01');
    let yearTrips = this.allTrips.filter(trip => {
      return moment(new Date(trip.date)).isAfter(year);
    })
    let totalCost = yearTrips.reduce((total, trip) => {
      let tripCost;
      destinations.forEach(destination => {
        if (trip.destinationID === destination.id) {
          tripCost = (trip.travelers * ((trip.duration * destination.estimatedLodgingCostPerDay) + destination.estimatedFlightCostPerPerson))
        }
      })
      total += tripCost
      return total;
    }, 0)
    return totalCost
  }

}


export default Traveler
