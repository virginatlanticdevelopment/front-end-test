import searchResults from "../../../../fixtures/search-results.json";
import type { BookingResponse } from "@/types/booking";

const fixtureResults = searchResults satisfies BookingResponse;

type SearchParams = { [key: string]: string | string[] | undefined };

const getSingleParam = (value: string | string[] | undefined) => {
  return Array.isArray(value) ? value[0] : value;
};

export default function SearchResultsComponent({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const location = getSingleParam(searchParams.location);
  const departureDate = getSingleParam(searchParams.departureDate);

  return (
    <section>
      <h2>{fixtureResults.holidays.length} results found</h2>
      {(location || departureDate) && (
        <p>
          Showing fixture results
          {location ? ` for ${location}` : ""}
          {departureDate ? ` departing ${departureDate}` : ""}.
        </p>
      )}
      <p>Please fill out the filters and results list below&hellip;</p>
    </section>
  );
}
