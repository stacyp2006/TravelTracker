const { expect } = require("chai");

import Traveler from '../src/traveler.js';
import travelerData from '..src/data/traveler-data.js';
import tripData from '..src/data/trip-data.js'

let traveler1;

describe('Traveler', () => {
  beforeEach(() => {
    // traveler = {
    //     id: 8,
    //     name: "Carlin O'Reilly",
    //     travelerType: "history buff"
    // };
    // trips = {
    //     id: 107,
    //     userID: 8,
    //     destinationID: 19,
    //     travelers: 3,
    //     date: "2020/06/02",
    //     duration: 6,
    //     status: "approved",
    //     suggestedActivities: []
    //   },
    //   {
    //     id: 126,
    //     userID: 8,
    //     destinationID: 26,
    //     travelers: 5,
    //     date: "2020/07/23",
    //     duration: 20,
    //     status: "approved",
    //     suggestedActivities: []
    //   },
    //   {
    //     id: 143,
    //     userID: 8,
    //     destinationID: 7,
    //     travelers: 3,
    //     date: "2020/02/25",
    //     duration: 12,
    //     status: "approved",
    //     suggestedActivities: []
    //   },
    //   {
    //     id: 147,
    //     userID: 8,
    //     destinationID: 6,
    //     travelers: 4,
    //     date: "2019/09/18",
    //     duration: 18,
    //     status: "approved",
    //     suggestedActivities: []
    //   },
    //   {
    //     id: 190,
    //     userID: 8,
    //     destinationID: 9,
    //     travelers: 5,
    //     date: "2019/09/13",
    //     duration: 5,
    //     status: "approved",
    //     suggestedActivities: []
    //   },
    traveler1 = new Traveler(travelerData, tripData);
  })

  it.only('should take in data from travelerData', () => {
    expect(traveler1.id).to.equal(8);
    expect(traveler1.name).to.equal('Carlin O/Reilly');
    expect(traveler1.travelerType).to.equal('history buff');
  })
})
