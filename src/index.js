import React from 'react';
import {render, findDOMNode} from 'react-dom';
import App from './js/App';
import './stylus/index.styl';

const mount = document.getElementById('app');

if (module.hot) {
  module.hot.accept();
}

render(<App/>, mount);