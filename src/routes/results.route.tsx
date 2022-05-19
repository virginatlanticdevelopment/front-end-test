import { h, JSX } from 'preact'
import { useRouter } from "preact-router";
import { useEffect } from 'preact/hooks';
import SearchComponent from '../components/search.component';
import { doRequest } from '../services/http.service';
import { BookingRequest, BookingResponse } from '../types/booking';
import { DateTime } from 'luxon';

export default function ResultsRoute(): JSX.Element {
    const [searchParams] = useRouter();

    useEffect(() => {
        const departureDate = DateTime.fromFormat(searchParams?.matches?.departureDate, "yyyy-MM-dd").toFormat("dd-MM-yyyy");
        const requestBody: BookingRequest = {
            "bookingType": "holiday",
            "location": searchParams?.matches?.location,
            "departureDate": departureDate,
            "duration": searchParams?.matches?.duration as unknown as number,
            "gateway": "LHR",
            "partyCompositions": [
                {
                    "adults": searchParams?.matches?.adults as unknown as number,
                    "childAges": [],
                    "infants": 0
                }
            ]
        }

        doRequest('POST', '/cjs-search-api/search', requestBody)
            .then((response: unknown | BookingResponse) => {
                // Results are loaded here
                console.log(response)
            })
    }, [searchParams])


    return (
        <section>
            <SearchComponent />

            <h1>Results should display here.</h1>
        </section>
    )
}