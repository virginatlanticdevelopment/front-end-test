# Virgin Atlantic Front-end Test

Thank you for your interest in joining our front-end team and taking the time to do the test. We think it will provide a nice and interesting challenge and a good talking point for the next stage of the process.

This exercise uses React, TypeScript, and Next.js App Router. The starter app provides sample holiday searches and a fixture-backed results route.

## Rules
You must write the application in React and TypeScript with Next.js. This is already set up in the project.

For the test you should adhere to the following conditions:

1. The code must be your own work. If you use a small external snippet, clearly comment and attribute it.
2. Include the tests you think are appropriate.
3. Give consideration to performance, accessibility, responsive behaviour, and empty states.
4. Code should be clear, concise, typed, and human readable.
5. You may use small, headless, or primitive component libraries where they help, but avoid assembling the page from a large opinionated UI kit. We want to see your component and styling decisions.
6. Use the included CSS setup or whatever CSS approach you are comfortable with.
7. You may use AI tools, but tell us which tools or models you used and what you used them for. You remain responsible for understanding and owning the submitted code.

## What it should do
Build the search results page. It should display useful holiday cards for a selected location and departure date, with enough information for a customer to compare options.

Select the data items you think matter most. As a guide, a useful card might include hotel name, destination, imagery, rating, board basis, duration, price per person, total price, and a small set of facilities or highlights.

Add the ability to filter the results by:

1. Price per person
2. Hotel facilities
3. Star rating

Filters should work together, and customers should be able to clear or reset their choices. Filter state should be reflected in the URL so the page can be refreshed or shared without losing the selected filters. Show a helpful empty state when no holidays match the selected filters.

Add a sort control for:

1. Recommended
2. Price, low to high
3. Rating, high to low

Derive filter options from the fixture data rather than hard-coding them.

We are interested in your judgement as well as the implementation. Make pragmatic decisions about filter usability, missing data, responsive layout, and how much information to show.

## Data

Sample links are provided on the home route as entry points into the results page.

Holiday package data is provided in `fixtures/search-results.json`. Use this fixture as the source of truth for the exercise; do not integrate with a live API.

The fixture includes varied prices, facilities, rating formats, selected dates, duplicate hotels with different board bases, inconsistent facility casing, long hotel names, and missing image/facility data so the app can be reviewed without relying on a live service.

Typings for the fixture data are provided in `src/types/booking.ts`.

Treat the fixture as if it came from a real service boundary. We are interested in how you model, normalize, and validate imperfect external data before rendering it. You may use a schema library such as Zod if you think it is appropriate.

## A good result

A good submission should:

1. Render a responsive list of comparable holiday cards.
2. Provide accessible, labelled filter controls.
3. Combine price, facility, and star-rating filters correctly.
4. Preserve filter and sort state in the URL.
5. Derive available filter options from the data.
6. Handle missing images, empty facilities, duplicate/cased facilities, duplicate hotels, long names, and string/number ratings gracefully.
7. Keep component, data-shaping, and filtering logic easy to follow.
8. Include focused tests where they add confidence.

## What we will review

We will focus on:

1. Correct, accessible, responsive UI.
2. Clear state and data flow.
3. Good TypeScript modelling and defensive handling of imperfect data.
4. Sensible test coverage for filtering, rendering, and edge cases.
5. Performance choices such as image sizing, server/client boundaries, and avoiding unnecessary work.

## Supplying your code
Please **create and commit your code into a public Github repository** and supply the link to the recruiter for review.

Thanks for your time, we look forward to hearing from you!

## Running the app

`npm run dev` starts the application in development mode.

`npm run build` checks a production build.

`npm run lint` runs ESLint.

`npm run typecheck` runs TypeScript without emitting files.

Use Node.js 20.19+, 22.13+, or 24+.
