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
        /*jsonp('http://www.google.com/finance/info?q=LON:ISF,LON:EMG,LON:LMI,LON:BRWM,LON:SSE,LON:MTC,LON:RDSA,NASDAQ:AAPL,LON:BLT,LON:TSCO,LON:MKS,tranLON:ULVR,LON:GSK,LON:RB,LON:JII,LON:TEM', null, (err, data) => {
            if (err) {
                console.error(error.message);
            } else {
                this.setState({quotes: data});
            }
            setTimeout(() => this.fetch(), 60000);
        });*/
        axios.get('http://query.yahooapis.com/v1/public/yql', {
                params: {
                    q: 'select * from yahoo.finance.quotes where symbol in ("ISF.L","EMG.L","LMI.L","BRWM.L","SSE.L","MTC.L","RDSA.L","BLT.L","TSCO.L","MKS.L","ULVR.L","GSK.L","RB.L","JII.L","TEM.L", "AAPL")',
                    format: 'json',
                    env: 'store://datatables.org/alltableswithkeys'
                }
            })
            .then((response) => {
                const quotes = response.data.query.results.quote;
                console.info('quotes:', quotes);
                this.setState({quotes: quotes});
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