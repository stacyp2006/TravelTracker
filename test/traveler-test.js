import { expect } from "chai";

import Traveler from '../src/traveler.js';
import travelerData from '../src/data/traveler-data.js';
import tripData from '../src/data/trip-data.js';
import destinations from '../src/data/destination-data.js';

describe('Traveler', () => {
  let traveler1;
  let traveler2;
  beforeEach(() => {
    traveler1 = new Traveler(travelerData[47], tripData, destinations);
    traveler2 = new Traveler(travelerData[43], tripData)
  })

  it('should be a function', () => {
    expect(Traveler).to.be.a('function');
  })

  it('should take in data from travelerData', () => {
    expect(traveler1.id).to.equal(48);
    expect(traveler1.name).to.equal("Lurlene Raisbeck");
    expect(traveler1.travelerType).to.equal("photographer");
  })

  it('should have a default value for past trips', () => {
    expect(traveler1.pastTrips).to.deep.equal([]);
  })

  it('should have a default value for current trip', () => {
    expect(traveler1.currentTrip).to.deep.equal({});
  })

  it('should have a default value for upcoming trips', () => {
    expect(traveler1.upcomingTrips).to.deep.equal([]);
  })

  it('should have a default value for pending trips', () => {
    expect(traveler1.pendingTrips).to.deep.equal([]);
  })

  it('should have a default value for all trips', () => {
    expect(traveler1.allTrips).to.deep.equal([]);
  })

  it('should return all trips for a user', () => {
    traveler1.findAllTrips(tripData)
    expect(traveler1.allTrips.length).to.equal(7)
  })

  it('should return past trips for a user', () => {
    traveler1.findAllTrips(tripData)
    traveler1.findPastTrips()
    expect(traveler1.pastTrips.length).to.equal(5)
  })

  it('should return upcoming trips for a user', () => {
    traveler1.findAllTrips(tripData)
    traveler1.findUpcomingTrips()
    expect(traveler1.upcomingTrips.length).to.equal(1);
  })

  it('should return pending trips for a user', () => {
    traveler1.findAllTrips(tripData)
    traveler1.findPendingTrips()
    expect(traveler1.pendingTrips.length).to.equal(1);
  })

  it('should return a users current trip', () => {
    traveler2.findAllTrips(tripData)
    traveler2.findCurrentTrip()
    expect(traveler2.currentTrip).to.deep.equal(
      {
        id: 68,
        userID: 44,
        destinationID: 41,
        travelers: 6,
        date: "2020/09/19",
        duration: 14,
        status: "approved",
        suggestedActivities: []
      }
    );
  })

  it('should calculate total money spent on travel this year', () => {
    traveler1.findAllTrips(tripData);
    traveler1.calculateTravelBudget(destinations);
    expect(traveler1.calculateTravelBudget(destinations)).to.equal(19230);
  })
})
