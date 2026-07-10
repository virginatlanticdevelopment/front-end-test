# Virgin Atlantic Holidays Front-end Test

Thank you for your interest in joining our front-end team and taking the time to do the test. We think it will provide a nice and interesting challenge and a good talking point for the next stage of the process.

This exercise uses React, TypeScript, and Next.js App Router. The starter app provides sample holiday searches and a server-rendered results route that posts to the search API.

## Rules
You must write the application in React and TypeScript with Next.js. This is already set up in the project.

For the test you should adhere to the following conditions:

1. The code must be your own work. If you use a small external snippet, clearly comment and attribute it.
2. Include the tests you think are appropriate. Cypress component testing is already configured.
3. Give consideration to performance, accessibility, responsive behaviour, and loading/error states.
4. Code should be clear, concise, typed, and human readable.
5. Do not use component libraries such as Bootstrap, Material UI, or similar. We want to see your component and styling decisions.
6. Use the included CSS setup or another CSS approach you are comfortable with.

## What it should do
Build the search results page. It should display useful holiday cards for a selected location and departure date, with enough information for a customer to compare options.

Select the data items you think matter most. As a guide, a useful card might include hotel name, destination, imagery, rating, board basis, duration, price per person, total price, and a small set of facilities or highlights.

Add the ability to filter the results by:

1. Price per person
2. Hotel facilities
3. Star rating

We are interested in your judgement as well as the implementation. Make pragmatic decisions about empty states, slow responses, filter usability, and how much information to show.

## Data

The API call has been started inside `SearchResultsComponent`, and sample links are provided on the home route.

Typings for the POST request body and response are provided in `src/types/booking.ts` file.

The endpoint returns holiday package data. The key properties are covered by the provided typings, although the endpoint may return more data than you need.

Results can be slow to load, so handle loading and error states in a way that feels appropriate. A basic `loading.tsx` file has been added.

If the live API is unavailable while you work, use a small local fixture and make it clear how to switch between the fixture and the live API. The app should still be reviewable without relying on a perfect network response.

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

`npm run cypress:open` opens Cypress component tests.

Use Node.js 20.19+, 22.13+, or 24+.
