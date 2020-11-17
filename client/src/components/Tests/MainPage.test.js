import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import MainPage from "../Section-Main/MainPage";

configure({adapter: new Adapter()});
test('message box', ()=> {
    shallow(<MainPage />);
})