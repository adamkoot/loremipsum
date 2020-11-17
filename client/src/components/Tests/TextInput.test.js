import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import TextInput from "../Form/TextInput";

configure({adapter: new Adapter()});
test('message box', ()=> {
    shallow(<TextInput />);
})