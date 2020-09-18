import chai from 'chai';
const expect = chai.expect;
<<<<<<< HEAD

import Traveler from '../src/traveler.js';

let traveler;
let traveler1;
let trips;

describe('Traveler', () => {
  beforeEach(() => {
    traveler = {
        id: 8,
        name: "Carlin O'Reilly",
        travelerType: "history buff"
    };
    trips = {
        id: 107,
        userID: 8,
        destinationID: 19,
        travelers: 3,
        date: "2020/06/02",
        duration: 6,
        status: "approved",
        suggestedActivities: []
      },
      {
        id: 126,
        userID: 8,
        destinationID: 26,
        travelers: 5,
        date: "2020/07/23",
        duration: 20,
        status: "approved",
        suggestedActivities: []
      },
      {
        id: 143,
        userID: 8,
        destinationID: 7,
        travelers: 3,
        date: "2020/02/25",
        duration: 12,
        status: "approved",
        suggestedActivities: []
      },
      {
        id: 147,
        userID: 8,
        destinationID: 6,
        travelers: 4,
        date: "2019/09/18",
        duration: 18,
        status: "approved",
        suggestedActivities: []
      },
      {
        id: 190,
        userID: 8,
        destinationID: 9,
        travelers: 5,
        date: "2019/09/13",
        duration: 5,
        status: "approved",
        suggestedActivities: []
      },
    traveler1 = new Traveler(traveler, trips);
  })

  it('should have an id', () => {
    expect(traveler1.id).to.equal(8);
  })
})
=======
>>>>>>> 631fd01eddb3564775bed87ff8eb5ae5ffaabbaf
