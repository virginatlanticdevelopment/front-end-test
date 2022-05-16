import { h } from 'preact';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-preact-pure';
import { DateComponent } from './date.component';
import { DateTime } from 'luxon';

configure({ adapter: new Adapter })


const format: string = "yyyy-MM-dd";

describe('DateComponent', () => {
    it('should display the input correctly', async () => {
      const value = DateTime.now().plus({ days: 7}).toFormat(format);
      const min = DateTime.now().plus({ days: 3}).toFormat(format);
      const max = DateTime.now().plus({ months: 12}).toFormat(format);
      const date_component = mount(<DateComponent name="departureDate" label="Date" id="departureDate" value={value} required={true} />)

      expect(date_component.find('input[type="date"]').is('[name="departureDate"]')).toBe(true)
      expect(date_component.find('input[type="date"]').is('[id="departureDate"]')).toBe(true)
      expect(date_component.find('input[type="date"]').prop("value")).toBe(value)
      expect(date_component.find('input[type="date"]').prop("required")).toBe(true)
      expect(date_component.find('input[type="date"]').is(`[min="${min}"]`)).toBe(true)
      expect(date_component.find('input[type="date"]').is(`[max="${max}"]`)).toBe(true)
    })
})