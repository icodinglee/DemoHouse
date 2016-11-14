import React from 'react';
import { render } from 'react-dom';


import './styles/style.css';
import { renderRoutes } from './routes';

render(renderRoutes(), document.getElementById('root'));
