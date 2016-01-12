import React from 'react';
import { render } from 'react-dom'
import { Router, Route, Link, IndexRoute } from 'react-router'

import '../less/Application.less';

import QuotesPage from './QuotesPage';
import Historicals from './Historicals';
import fetchQuotes from 'yahoo-finance-quotes';
import fetchHistorical from './FetchHistorical';

import moment from 'moment';
import localforage from 'localforage';

const symbols = ["ISF.L", "EMG.L", "LMI.L", "BRWM.L", "SSE.L", "MTC.L", "RDSA.L", "BLT.L", "TSCO.L", "MKS.L", "ULVR.L", "GSK.L", "RB.L", "JII.L", "TEM.L", "AAPL"];
//const symbols = ["ISF.L", "EMG.L", "LMI.L"];

localforage
    .setItem('key', 'value')
    .then(() => console.info("hello"));

localforage
    .getItem('key')
    .then((value) => console.info("hello " + value));


var Application = React.createClass({

    render() {
        console.info('Application.render', this);
        return (<div className="page"> {
            this.props.children &&
            React.cloneElement(this.props.children, { symbols: symbols})
        } </div>);
     }
});



render((
    <Router>
        <Route path="/" component={Application} >
            <IndexRoute component={QuotesPage} />
            <Route path="/quotes" component={QuotesPage} />
            <Route path="/historicals" component={Historicals} />
        </Route>
    </Router>
), document.getElementById('application'));