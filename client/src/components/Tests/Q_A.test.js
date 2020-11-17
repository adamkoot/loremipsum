import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import Q_A from "../Section-Main/Q_A";

configure({adapter: new Adapter()});
test('message box', ()=> {
    shallow(<Q_A />);
})