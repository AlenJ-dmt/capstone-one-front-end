import React from 'react';
import TiresList from './TiresList';
import ReactDOM from 'react-dom';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TiresList />, div);
    ReactDOM.unmountComponentAtNode(div);
  });