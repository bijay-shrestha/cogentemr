import React from 'react';
import ReactDOM from 'react-dom';
import CButton from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CButton />, div);
  ReactDOM.unmountComponentAtNode(div);
});
