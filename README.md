# Virgin Atlantic ~ Hotel Search Results (Front-end)
## Rules
You must write the application in [Preact](https://preactjs.com/) and [TypeScript](https://www.typescriptlang.org/). Both are set up and ready to use inside this project.

In addition you should adhere to the following conditions:

1) The code must be your own work. If you have a strong case to use a small code snippet of someone else's e.g. a
boilerplate function, it must be clearly commented and attributed to the original author
1) You must include any unit tests you think are appropriate - Jest and Enzyme are set up already
1) Give consideration to performance and accessability.  Lighthouse scores are 100% - please keep them that way
1) Code must be clear, consise and human readable. Simplicity is often key
1) We do not want to see how well you can use a UI framework. This is a test and we want to see what you can create

## What it should do
Build a 'search results page' which connects to our holiday search API to display a list of holidays for a given location and departure date.  Select what data items (example listed below) you think should be included on the page.

Available locations include: 'new-york', 'orlando', 'barbados', 'toronto'.

Add the ability to filter the results further by:

1) Price per person
1) Hotel facilities 
1) Star rating

You can call our API service by making a POST request as follows (please note that the departure date must be some date in the future and a maximum of nine passengers can be searched for):

```POST https://www.virginholidays.co.uk/cjs-search-api/search```

Typings for the request body and response are provided in `src/types/booking.ts`.

## Supplying your code
Please **create and commit your code into a public Github repository** and supply the link to the recruiter for review.

## Supporting Data
The endpoint will return data relating to the holiday packages available. The key properties you should be interested in are highlighted below.  Please note, our endpoint will return much more data, but you are free to ignore this!

```
{
   "holidays":[
      {
         "totalPrice":646.27,
         "pricePerPerson":323.14,
         "hotel":{
            "id":"H2999",
            "name":"Sonesta ES Suites",
            "boardBasis":"Room Only",
            "content":{
               "name":"Sonesta ES Suites",
               "vRating":"4",
               "hotelDescription":"Completely reimagined, Sonesta ES Suites Orlando offers a fresh modern look throughout the recently renovated hotel. This all-suite, courtyard-style hotel is perfect for families &#x2014; with rooms that easily accommodate 6-8 people.",
               "atAGlance":[
                  "Excellent location on International Drive",
                  "Complimentary self-parking",
                  "Complimentary WiFi",
                  "Lobby lounge with daily happy hour"
               ],
               "parentLocation":"International Drive, Orlando",
               "images":[
                  {
                     "RESULTS_CAROUSEL":{
                        "url":"//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/676023/676023-1-results_carousel.jpg?version=35"
                     }
                  }
               ],
               "holidayType":[
                  "Families"
               ],
               "boardBasis":[
                  "Bed and Breakfast"
               ],
               "hotelLocation":[
                  "Close to Universal Orlando Resort"
               ],
               "accommodationType":[
                  "Room"
               ],
               "hotelFacilities":[
                  "Restaurant",
                  "Bar",
                  "Free Parking",
                  "Room Service",
                  "Safety Deposit Box",
                  "Fitness Centre/Gym",
                  "Laundry Service",
                  "Internet Access",
                  "Swimming Pool",
                  "Hot tub"
               ],
               "starRating":"4",
               "propertyType":"Hotel"
            }
         },
         "flyingClubMiles":1293,
         "virginPoints":1293,
         "tierPoints":20,
         "departureDate":"2022-05-24",
         "selectedDate":"2022-05-24"
      }
   ]
}
```

Thanks for your time, we look forward to hearing from you!

## Running the app

`npm run start` to start serving the application. We are using [ParcelJS](https://parceljs.org/) to bundle to refer to their documentation for more details.

`npm run test` to run the unit tests. We have provided one passing starter test already.
