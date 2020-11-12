import React from 'react';
import AddCustomWheel from './AddCustomWheel';
import ReactDOM from 'react-dom';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AddCustomWheel />, div);
    ReactDOM.unmountComponentAtNode(div);
  });