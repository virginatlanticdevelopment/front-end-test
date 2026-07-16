import SearchResultsComponent from '../components/search-results/search-results.component'

type SearchParams = { [key: string]: string | string[] | undefined };

export default async function Results({
  searchParams,
}: {
  searchParams: Promise<SearchParams>
}) {
  return (
    <>
      <h1>Search results</h1>

      <SearchResultsComponent searchParams={await searchParams} />
    </>
  )
}
