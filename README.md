# Travel Tracker

## Project Description

This is a solo project from Module 2 of the Front End Engineering Program at Turing School of Software and Design. The Travel Tracker app allows a user to view their current, upcoming, past, and pending trips. The user can also book a new trip.

## Setup

Clone down the repo and run `npm install`.

To verify that it is setup correctly, run `npm start` in your terminal. Go to `http://localhost:8080/`. You should see a login page for a site called Wander. Enter `control + c` in your terminal to stop the server at any time.

## Technologies Used

- JavaScript, HTML, CSS/SCSS
- Webpack
- Mocha and Chai
- Fetch API

## Successes

- Successes include implementing fetch properly, creating my first login page, validating user input, and having a functional page.

## Challenges

- I still need to work on the architecture of my code. I need more practice on breaking down my code into separate files so it is more readable and more reliant on the principles of OOP.
- While my CSS skills have improved, design is not my strong suit and I would like to continue improving so the UI/UX is even better.


## Future Improvements

- The code definitely needs some refactoring. There are some places where methods could be broken out into smaller bits for SRP. There are also some places it could be DRYer.
- I believe I have a minor bug with the pending display. When a new trip is booked, trips that were previously booked duplicate in the display and the new trip doesn't show up at all. The new trip does show up with the other (without duplication) when the user logs in.
- There are various error messages that appear if a user doesn't enter information properly. It would be nice to have them disappear when no longer needed.
- Ultimately, being able to view more specifics of a trip or access the site from an agent point of view would be nice as well. 
