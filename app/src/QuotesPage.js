import React from 'react';

import Quote from './Quote';
import Quotes from './Quotes';

import percent from './Percent';
import fetchQuotes from 'yahoo-finance-quotes';

export default React.createClass({

    fetch() {
        //console.info(new Date(), 'QuotesPage.fetch');
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
        //console.info('QuotesPage.componentDidMount', this.props);
        this.fetch();
    },

    render() {
        //console.info('QuotesPage.render', this);
        return <Quotes quotes={this.state.quotes} />;
    }
});
