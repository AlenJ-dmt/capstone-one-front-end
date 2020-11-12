import React from 'react';
import ToggleButton from './toggleButton';
import ReactDOM from 'react-dom';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ToggleButton />, div);
    ReactDOM.unmountComponentAtNode(div);
  });