import React from 'react';
import DropDown from './DropDown';
import ReactDOM from 'react-dom';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DropDown />, div);
    ReactDOM.unmountComponentAtNode(div);
  });