import { expect } from "chai";

import Destination from '../src/destination.js';
import destinations from '../src/data/destination-data.js';

describe('Destination', () => {
  let destination;
  beforeEach(() => {
    destination = new Destination(destinations[0]);
  })

  it('should be a function', () => {
    expect(Destination).to.be.a('function');
  })

  it('should take in data from destinations', () => {
    expect(destination.id).to.equal(1);
    expect(destination.destination).to.equal("Lima, Peru");
    expect(destination.estimatedLodgingCostPerDay).to.equal(70);
    expect(destination.estimatedFlightCostPerPerson).to.equal(400);
    expect(destination.image).to.equal("https://images.unsplash.com/photo-1489171084589-9b5031ebcf9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80");
    expect(destination.alt).to.equal("overview of city buildings with a clear sky");
  })
})
