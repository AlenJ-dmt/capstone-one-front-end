import React from 'react';
import Post from './Post';
import ReactDOM from 'react-dom';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Post />, div);
    ReactDOM.unmountComponentAtNode(div);
  });