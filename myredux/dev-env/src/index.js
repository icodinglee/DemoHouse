import React from 'react';
import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import './assets/css/common.css';

import { renderRoutes } from './routes';
render(renderRoutes(), document.getElementById('root'));
