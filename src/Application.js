import React from 'react';
import { render } from 'react-dom'
import { Router, Route, Link } from 'react-router'

import '../less/Application.less';

import Quotes from './Quotes';
import fetchQuotes from 'yahoo-finance-quotes';
import fetchHistorical from './FetchHistorical';

import moment from 'moment';

const symbols = ["ISF.L", "EMG.L", "LMI.L", "BRWM.L", "SSE.L", "MTC.L", "RDSA.L", "BLT.L", "TSCO.L", "MKS.L", "ULVR.L", "GSK.L", "RB.L", "JII.L", "TEM.L", "AAPL"];
//const symbols = ["ISF.L", "EMG.L", "LMI.L"];


var Application = React.createClass({

    fetch() {
        console.info(new Date(), 'Application.fetch');
        fetchQuotes(symbols)
            .then((quotes) => {
                this.setState({quotes: quotes});
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
        console.info('Application.componentDidMount', this.props);
        const symbolsX = this.props.location.query.symbols;
        //console.info('', symbolsX);
        this.fetch();
    },

    render() {
        //console.info('Application.render', this.state);
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