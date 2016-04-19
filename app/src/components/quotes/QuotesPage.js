import React from 'react';

import Quotes from './Quotes';

import fetchQuotes from 'yahoo-finance-quotes';
import fetchHistoricals from '../historicals/FetchHistorical';


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

    fetchHistoricals() {
        //console.info(new Date(), 'QuotesPage.fetchHistoricals');
        const symbols = this.props.symbols;
        //const symbols = ['GB00BLT1YM08.L'];
        symbols.map((symbol) => {
            return fetchHistoricals(symbol)
                .then((historicalData) => {
                    //console.info(`${new Date()} QuotesPage.fetchHistorical for '${symbol}'`);
                    let historicals = this.state.historicals;
                    historicals[symbol] = historicalData;
                    this.setState({historicals: historicals});
                })
                .catch((response) => {
                    console.error(response);
                });
        });
    },

    getInitialState() {
        return {
            quotes: [],
            historicals: {}
        }
    },

    componentDidMount() {
        //console.info('QuotesPage.componentDidMount', this.props);
        this.fetch();
        this.fetchHistoricals();
    },

    render() {
        //console.info('QuotesPage.render', this);
        return <Quotes quotes={this.state.quotes} historicals={this.state.historicals} />;
    }
});
