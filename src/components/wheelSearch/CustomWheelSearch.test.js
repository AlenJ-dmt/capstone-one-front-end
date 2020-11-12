import React from 'react';
import CustomWheelSearch from './CustomWheelSearch';
import ReactDOM from 'react-dom';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CustomWheelSearch />, div);
    ReactDOM.unmountComponentAtNode(div);
  });