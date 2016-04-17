import React from 'react';

import Historical from './Historical';
import percent from './../Percent';

import Historicals from './Historicals';
import fetchHistoricals from './FetchHistorical';


export default React.createClass({

    fetch() {
        console.log(new Date(), 'HistoricalsPage.fetch', this);
        const symbols = this.props.symbols;
        //const symbols = ['GB00BLT1YM08.L'];
        const promises = symbols.map((symbol) => {
            return fetchHistoricals(symbol)
                .then((historicals) => {
                    return {symbol: symbol, historicals: historicals};
                })
                .catch((response) => {
                    console.error(response);
                });
        });
        //setTimeout(() => this.fetch(), 60000);
        Promise.all(promises).then((values) => {
            this.setState({values: values});
        });
    },

    getInitialState() {
        return {
            values: []
        }
    },

    componentDidMount() {
        //console.log('HistoricalsPage.componentDidMount', this.props);
        this.fetch();
    },

    render() {
        //console.log('HistoricalsPage.render', this);
        return <Historicals values={this.state.values} />;
    }
});
