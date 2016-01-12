import React from 'react';

import Quote from './Quote';
import percent from './Percent';

import Quotes from './Quotes';
import Historicals from './Historicals';
import fetchQuotes from 'yahoo-finance-quotes';
import fetchHistorical from './FetchHistorical';

import moment from 'moment';
import localforage from 'localforage';

export default React.createClass({

    fetch() {
        console.info(new Date(), 'QuotesPage.fetch');
        fetchQuotes(this.props.symbols)
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
        console.info('QuotesPage.componentDidMount', this.props);
        this.fetch();
    },

    render() {
        console.info('QuotesPage.render', this);
        return <Quotes quotes={this.state.quotes} />;
    }
});
