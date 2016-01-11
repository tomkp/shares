import React from 'react';
import { render } from 'react-dom'
import { Router, Route, Link, IndexRoute } from 'react-router'

import '../less/Application.less';

import Quotes from './Quotes';
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
        //const { symbols } = props ? props.params : this.props.params;
        //console.info('symbols', symbols);
        this.fetch();
    },

    render() {
        console.info('Application.render', this);
        const quotes = this.state.quotes;
        return (<div className="page"> {
            this.props.children &&
            React.cloneElement(this.props.children, { quotes: quotes})
        } </div>);
     }
});



render((
    <Router>
        <Route path="/" component={Application} >
            <IndexRoute component={Quotes} />
            <Route path="/quotes" component={Quotes} />
        </Route>
    </Router>
), document.getElementById('application'));