import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-reboot.min.css';
import React from 'react';
import { render } from 'react-dom';
import App from './App.js';

render(
    <App {...window.props} />,
    document.getElementById('root')
);
