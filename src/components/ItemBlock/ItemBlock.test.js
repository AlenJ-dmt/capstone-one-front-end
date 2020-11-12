import React from 'react';
import ItemBlock from './ItemBlock';
import ReactDOM from 'react-dom';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ItemBlock />, div);
    ReactDOM.unmountComponentAtNode(div);
  });