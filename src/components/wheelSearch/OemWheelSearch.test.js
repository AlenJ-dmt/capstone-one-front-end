import React from 'react';
import OemWheelSearch from './OemWheelSearch';
import ReactDOM from 'react-dom';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<OemWheelSearch />, div);
    ReactDOM.unmountComponentAtNode(div);
  });