import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import SelectInput from "../Form/SelectInput";

configure({adapter: new Adapter()});
test('message box', ()=> {
    shallow(<SelectInput />);
})