import { expect } from "chai";

import Traveler from '../src/traveler.js';
import travelerData from '../src/data/traveler-data.js';
import tripData from '../src/data/trip-data.js';



describe('Traveler', () => {
  let traveler1;
  beforeEach(() => {
    traveler1 = new Traveler(travelerData[0]);
  })

  it('should be a function', () => {
    expect(Traveler).to.be.a('function');
  })

  it.only('should take in data from travelerData', () => {
    console.log(travelerData[0]);
    expect(traveler1.id).to.equal(1);
    expect(traveler1.name).to.equal("Ham Leadbeater");
    expect(traveler1.travelerType).to.equal("relaxer");
  })

  it('should have past trips', () => {
    expect(traveler1.pastTrips).to.deep.equal([]);
  })

  it('should have a current trip', () => {
    expect(traveler1.currentTrip).to.deep.equal({});
  })

  it('should have upcoming trips', () => {
    expect(traveler1.upcomingTrips).to.deep.equal([]);
  })

})
