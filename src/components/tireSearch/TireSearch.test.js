import React from 'react';
import TireSearch from './TireSearch';
import ReactDOM from 'react-dom';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TireSearch />, div);
    ReactDOM.unmountComponentAtNode(div);
  });