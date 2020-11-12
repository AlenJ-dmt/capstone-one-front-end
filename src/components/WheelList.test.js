import React from 'react';
import WheelList from './WheelList';
import ReactDOM from 'react-dom';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<WheelList />, div);
    ReactDOM.unmountComponentAtNode(div);
  });