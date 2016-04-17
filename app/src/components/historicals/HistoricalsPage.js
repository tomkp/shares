import React from 'react';

import Historical from './Historical';
import percent from './../Percent';

import Historicals from './Historicals';
import fetchHistoricals from './FetchHistorical';


export default React.createClass({

    fetch() {
        console.info(new Date(), 'HistoricalsPage.fetch', this);
        const symbols = this.props.symbols;
        //const symbols = ['GB00BLT1YM08.L'];
        const x = symbols.map((symbol) => {
            return fetchHistoricals(symbol)
                .then((historicals) => {
                    //const values = this.state.values;
                    //values.push({symbol: symbol, historicals: historicals});
                    //this.setState({values: values});
                    return {symbol: symbol, historicals: historicals};
                })
                .catch((response) => {
                    console.error(response);
                });
        });
        console.info('x', x);
        //setTimeout(() => this.fetch(), 60000);
        Promise.all(x).then((z) => {
            console.info('z', z);
            this.setState({values: z});
        });
    },

    getInitialState() {
        return {
            values: []
        }
    },

    componentDidMount() {
        console.info('HistoricalsPage.componentDidMount', this.props);
        this.fetch();
    },

    render() {
        console.info('HistoricalsPage.render', this);
        return <Historicals values={this.state.values} />;
    }
});
