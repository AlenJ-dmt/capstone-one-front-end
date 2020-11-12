import React from 'react';
import SelectElement from './SelectElement';
import ReactDOM from 'react-dom';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SelectElement />, div);
    ReactDOM.unmountComponentAtNode(div);
  });