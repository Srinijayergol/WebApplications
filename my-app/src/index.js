import React from 'react';
import {render} from 'react-dom';
import {Route, Router} from 'react-router';

import './index.css';
import App from './App';
import BuildApp from './BuildApp';

render((
    <Router>
      <Route path="/" component={App} />
      <Route path="BuildApp" component={BuildApp}/>
    </Router>
),document.getElementById('root'));
