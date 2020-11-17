import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import Diet from "../Section-Main/Diet";
import diet from '../Section-Main/Data/diet-data';

configure({adapter: new Adapter()});
test('message box', ()=> {
    shallow(<Diet />);
})

it('includes diet-data', () => {
    const app = shallow(<Diet />);
    expect(app.containsMatchingElement(diet)).toEqual(true)
  });