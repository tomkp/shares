import React from 'react';
import { render } from 'react-dom'
import { Router, Route, Link } from 'react-router'

import '../less/Application.less';

import jsonp from 'jsonp';

import Quotes from './Quotes';
//import lookup from './Lookup';


import axios from 'axios';





var Application = React.createClass({

    fetch() {
        console.info('Application.fetch');
        const symbols = ["ISF.L","EMG.L","LMI.L","BRWM.L","SSE.L","MTC.L","RDSA.L","BLT.L","TSCO.L","MKS.L","ULVR.L","GSK.L","RB.L","JII.L","TEM.L", "AAPL"];
        const symbolStr = symbols.map((s) => `"${s}"` ).join(',');
        axios.get('http://query.yahooapis.com/v1/public/yql', {
                params: {
                    q: `select * from yahoo.finance.quotes where symbol in ('${symbolStr}')`,
                    format: 'json',
                    env: 'store://datatables.org/alltableswithkeys'
                }
            })
            .then((response) => {
                this.setState({quotes: response.data.query.results.quote});
                setTimeout(() => this.fetch(), 60000);
            })
            .catch((response) => {
                console.error(response);
            });
    },

    getInitialState() {
      return {
        quotes: []
      }
    },

    componentDidMount() {
        console.info('Application.componentDidMount');
        this.fetch();
    },

    render() {
        console.info('Application.render', this.state);
        const quotes = this.state.quotes;
        return (
            <Quotes quotes={quotes} />
        );
     }
});



render((
    <Router>
        <Route path="/" component={Application} />
    </Router>
), document.getElementById('application'));