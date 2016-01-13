import React from 'react';

import Historical from './Historical';
import percent from './Percent';

import Historicals from './Historicals';
import fetchHistoricals from './FetchHistorical';


export default React.createClass({

    fetch() {
        console.info(new Date(), 'HistoricalsPage.fetch');
        fetchHistoricals(this.props.symbols)
            .then((historicals) => {
                this.setState({historicals: historicals});
                setTimeout(() => this.fetch(), 60000);
            })
            .catch((response) => {
                console.error(response);
            });
    },

    getInitialState() {
        return {
            historicals: []
        }
    },

    componentDidMount() {
        console.info('HistoricalsPage.componentDidMount', this.props);
        this.fetch();
    },

    render() {
        console.info('HistoricalsPage.render', this);
        return <Historicals historicals={this.state.historicals} />;
    }
});
