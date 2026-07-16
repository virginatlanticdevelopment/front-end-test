import searchResults from "../../../../fixtures/search-results.json";
import type { BookingResponse } from "@/types/booking";

const fixtureResults = searchResults satisfies BookingResponse;

export default function SearchResultsComponent() {
  return (
    <section>
      <h2>{fixtureResults.holidays.length} results found</h2>
      <p>Please fill out the filters and results list below&hellip;</p>
    </section>
  );
}
