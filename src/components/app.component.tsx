import { h, JSX } from 'preact'
import Router, { Route } from 'preact-router';
import AsyncRoute from 'preact-async-route';
import HeaderComponent from './header.component'
import HomeRoute from '../routes/home.route';

export default function App(): JSX.Element {
    return (
        <section>
            <HeaderComponent />
            <Router>                
                <HomeRoute path="/" />
                <AsyncRoute
                    path="/results"
                    getComponent={() => import('../routes/results.route').then(module => module.default)}
                />
            </Router>
        </section>
    )
}