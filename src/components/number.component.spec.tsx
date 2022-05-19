import { h } from 'preact';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-preact-pure';
import { NumberComponent } from './number.component';

configure({ adapter: new Adapter })

describe('NumberComponent', () => {
    it('should display the input correctly', async () => {
        const currency_component = mount(<NumberComponent name="duration" label="Duration" id="duration_field" min={1} max={31} value={10} required={true} />)

        expect(currency_component.find('input[type="number"]').is('[name="duration"]')).toBe(true)
        expect(currency_component.find('input[type="number"]').is('[id="duration_field"]')).toBe(true)
        expect(currency_component.find('input[type="number"]').prop("value")).toBe(10)
        expect(currency_component.find('input[type="number"]').prop("min")).toBe(1)
        expect(currency_component.find('input[type="number"]').prop("max")).toBe(31)
        expect(currency_component.find('input[type="number"]').prop("required")).toBe(true)
    })

    it('should display default value', async () => {
        const test_value = false
        const currency_component = mount(<NumberComponent name="duration" label="Duration" id="duration_field" value={test_value || 7} min={1} max={31} required={true} />)

        expect(currency_component.find('input[type="number"]').prop("value")).toBe(7)
    })
})