import { expect } from "chai";

import Traveler from '../src/traveler.js';
import travelerData from '../src/data/traveler-data.js';
import tripData from '../src/data/trip-data.js';



describe('Traveler', () => {
  let traveler1;
  beforeEach(() => {
    traveler1 = new Traveler(travelerData[47], tripData);
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
    traveler1.addPastTrips()
    expect(traveler1.pastTrips.length).to.equal(5)
  })

  it('should return upcoming trips for a user', () => {
    traveler1.findAllTrips(tripData)
    traveler1.addUpcomingTrips()
    expect(traveler1.pastTrips.length)
  })


})
