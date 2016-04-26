import React from 'react';
import {render} from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import QuotesPage from './quotes/QuotesPage';
import './application.scss';


const defaultSymbols = [
    'GB00B3X7QG63.L',
    'VMID.L',
    'GB00BLT1YM08.L',
    'GB00B7LWFW05.L',
    'GB00B59G4Q73.L',
    //'RDSA.L',
    'TSCO.L',
    'MKS.L',
    //'ULVR.L',
    //'GSK.L',
    'VFINX',
    //'RB.L',
    //'ISF.L',
    // 'VEVE.L',
    // 'VVAL.L',
    //'EMG.L',
    //'LMI.L',
];


const Application = ({children, params}) => {
    console.info('Application.render', params);
    let symbols = defaultSymbols;
    if (params.symbols) {
        symbols = params.symbols.split(',');
    }
    return (<div className="page"> { children && React.cloneElement(children, {symbols: symbols})} </div>);
};


render((
    <Router history={browserHistory}>
        <Route path="/" component={Application}>
            <IndexRoute component={QuotesPage}/>
            <Route path="/:symbols" component={QuotesPage}/>
        </Route>
    </Router>
), document.getElementById('root'));

