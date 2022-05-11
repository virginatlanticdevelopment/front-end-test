import { h, JSX } from 'preact'
import HeaderComponent from './header.component'

export default function App(): JSX.Element {
    return (
        <section>
            <HeaderComponent />

            <h1>App Here</h1>
        </section>
    )
}