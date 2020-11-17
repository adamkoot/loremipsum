import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import Preferences from "../Section-Main/Preferences";

configure({adapter: new Adapter()});
test('message box', ()=> {
    shallow(<Preferences />);
})