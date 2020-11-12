import React from 'react';
import AddOemWheel from './AddOemWheel';
import ReactDOM from 'react-dom';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AddOemWheel />, div);
    ReactDOM.unmountComponentAtNode(div);
  });