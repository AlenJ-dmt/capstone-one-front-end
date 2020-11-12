import React from 'react';
import CustomButton from './CustomButton';
import ReactDOM from 'react-dom';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CustomButton />, div);
    ReactDOM.unmountComponentAtNode(div);
  });