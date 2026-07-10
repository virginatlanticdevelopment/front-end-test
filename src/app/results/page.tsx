import { Suspense } from 'react';
import SearchResultsComponent from '../components/search-results/search-results.component'
import Loading from './loading';

export default function Results({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  return (
    <>
      <h1>Search results</h1>

      <Suspense fallback={<Loading />}>
        <SearchResultsContent searchParams={searchParams} />
      </Suspense>
    </>
  )
}

async function SearchResultsContent({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  return <SearchResultsComponent searchParams={await searchParams} />
}
