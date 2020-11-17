import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import Register from "../Section-Login/Register";

configure({adapter: new Adapter()});
test('message box', ()=> {
    shallow(<Register />);
})