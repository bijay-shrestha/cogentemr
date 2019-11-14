import React from 'react';
import ReactDOM from 'react-dom';
import CInputText from './index';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CInputText/>, div);
    ReactDOM.unmountComponentAtNode(div);
});