import { expect } from "chai";

import Traveler from '../src/traveler.js';
import travelerData from '../src/data/traveler-data.js';
import tripData from '../src/data/trip-data.js';



describe('Traveler', () => {
  let traveler1;
  beforeEach(() => {
    traveler1 = new Traveler(travelerData[0], tripData);
  })

  it('should be a function', () => {
    expect(Traveler).to.be.a('function');
  })

  it('should take in data from travelerData', () => {
    expect(traveler1.id).to.equal(1);
    expect(traveler1.name).to.equal("Ham Leadbeater");
    expect(traveler1.travelerType).to.equal("relaxer");
  })

  it.only('should have a default value for past trips', () => {
    expect(traveler1.pastTrips).to.deep.equal([]);
  })

  it.only('should have a default value for current trip', () => {
    expect(traveler1.currentTrip).to.deep.equal({});
  })

  it.only('should have a default value for upcoming trips', () => {
    expect(traveler1.upcomingTrips).to.deep.equal([]);
  })

  it.only('should have a default value for pending trips', () => {
    expect(traveler1.pendingTrips).to.deep.equal([]);
  })


})
