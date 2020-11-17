import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import Calendar from "../Section-Main/Calendar";

configure({adapter: new Adapter()});
test('render', ()=> {
    shallow(<Calendar />);
})
