import { h } from 'preact';
import { mount, configure } from 'enzyme';
import { LOCATIONS } from '../consts/search'
import Adapter from 'enzyme-adapter-preact-pure';
import { SelectComponent } from './select.component';

configure({ adapter: new Adapter })
3
describe('SelectComponent', () => {
    it('should display the input correctly', async () => {
        const select_component = mount(<SelectComponent name="location" label="Destination" id="location_field" value={""} options={LOCATIONS} required={true} />)

        expect(select_component.find('select').is('[name="location"]')).toBe(true)
        expect(select_component.find('select').is('[id="location_field"]')).toBe(true)
        expect(select_component.find('select option[selected=true]')).toHaveLength(0)
    })

    it('should display default value', async () => {
        const select_component = mount(<SelectComponent name="location" label="Destination" id="location_field" value={"orlando"} options={LOCATIONS} required={true} />)

        expect(select_component.find('select option[selected=true]').text()).toBe("Orlando")
    })
})