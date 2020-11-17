import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import Diet_details from "../Section-Main/Diet-details";

configure({adapter: new Adapter()});
test('message box', ()=> {
    shallow(<Diet_details />);
})