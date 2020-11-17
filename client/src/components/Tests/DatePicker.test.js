import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import DatePicker from "../Form/DatePicker";

configure({adapter: new Adapter()});
test('message box', ()=> {
    shallow(<DatePicker />);
})