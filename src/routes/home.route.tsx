import { h, JSX } from 'preact'
import SearchComponent from '../components/search.component'

export default function HomeRoute(): JSX.Element {
    return (
        <section>
            <SearchComponent />
            <h1>Holiday Search Test</h1>

            <p>We have provided a simple search panel for testing using `preact-router`.</p>

            <p>We have made the request to our search service and added a proxy in the `/results` route in `src/routes/results.route.tsx`.</p>
        </section>
    )
}