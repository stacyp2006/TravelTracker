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

  // it('should add trips to the pastTrips array after they occur', () => {
  //   traveler1.addPastTrips(tripData);
  //   expect(traveler1.pastTrips).to.deep.equal([{
  //     id: 28,
  //     userID: 48,
  //     destinationID: 31,
  //     travelers: 3,
  //     date: "2020/02/03",
  //     duration: 14,
  //     status: "approved",
  //     suggestedActivities: []
  //   },
  //   {
  //     id: 122,
  //     userID: 48,
  //     destinationID: 17,
  //     travelers: 2,
  //     date: "2020/09/06",
  //     duration: 5,
  //     status: "approved",
  //     suggestedActivities: []
  //   },
  //   {
  //     id: 133,
  //     userID: 48,
  //     destinationID: 46,
  //     travelers: 5,
  //     date: "2019/09/15",
  //     duration: 10,
  //     status: "approved",
  //     suggestedActivities: []
  //   },
  //   {
  //     id: 156,
  //     userID: 48,
  //     destinationID: 40,
  //     travelers: 1,
  //     date: "2019/08/02",
  //     duration: 7,
  //     status: "approved",
  //     suggestedActivities: []
  //   },
  //   {
  //     id: 162,
  //     userID: 48,
  //     destinationID: 25,
  //     travelers: 2,
  //     date: "2020/06/22",
  //     duration: 17,
  //     status: "approved",
  //     suggestedActivities: []
  //   }, ])
  //})


})
