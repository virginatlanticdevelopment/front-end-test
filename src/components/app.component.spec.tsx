import { h } from 'preact';
import { mount, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-preact-pure'
import App from './app.component'

configure({ adapter: new Adapter })
 
describe('AppComponent', () => {
    it('should display the correct text', async () => {
        const appComponent = mount(<App />)

        expect(appComponent.find('h1').text()).toBe('App Here')
    })
})