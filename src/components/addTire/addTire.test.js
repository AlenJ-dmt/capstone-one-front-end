import React from 'react';
import AddTire from './AddTire';
import ReactDOM from 'react-dom';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AddTire />, div);
    ReactDOM.unmountComponentAtNode(div);
  });