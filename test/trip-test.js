import { expect } from "chai";

import Trip from '../src/trip.js';
import tripData from '../src/data/trip-data.js';
import destinations from '../src/data/destination-data.js';

describe('Trip', () => {
  let trip1;
  beforeEach(() => {
    trip1 = new Trip(tripData[0]);
  })

  it('should be a function', () => {
    expect(Trip).to.be.a('function');
  })

  it('should take in info from tripData', () => {
    expect(trip1.id).to.equal(1);
    expect(trip1.userID).to.equal(44);
    expect(trip1.destinationID).to.equal(49);
    expect(trip1.travelers).to.equal(1);
    expect(trip1.date).to.equal('2019/09/16');
    expect(trip1.duration).to.equal(8);
    expect(trip1.status).to.equal("approved");
  })

  it('should calculate the cost of a trip', () => {
    trip1.calculateTripCost(destinations);
    expect(trip1.calculateTripCost(destinations)).to.equal(5819);
  })

})
