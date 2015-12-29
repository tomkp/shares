import React from 'react';
import { render } from 'react-dom'
import { Router, Route, Link } from 'react-router'

import '../less/Application.less';

import jsonp from 'jsonp';

import Quotes from './Quotes';


var Application = React.createClass({

    fetch() {
        console.info('Application.fetch');
        //jsonp('http://www.google.com/finance/info?infotype=infoquoteall&q=LSE:TSCO,LSE:MKS,NASDAQ:GOOG,LSE:MTC', null, (err, data) => {
        jsonp('http://www.google.com/finance/info?q=LSE:TSCO,LSE:MKS,NASDAQ:GOOG,LSE:MTC', null, (err, data) => {
            if (err) {
                console.error(error.message);
            } else {
                this.setState({quotes: data});
            }
            setTimeout(() => this.fetch(), 60000);
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