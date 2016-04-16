import React from "react";
import {render} from "react-dom";
import {Router, Route, IndexRoute} from "react-router";
import QuotesPage from "./QuotesPage";
import HistoricalsPage from "./HistoricalsPage";
import "../less/Application.less";


const symbols = [
    "GB00B3X7QG63.L",
    "VMID.L",
    "GB00BLT1YM08.L",
    "GB00B7LWFW05.L",
    // "VEVE.L",
    // "VVAL.L",
    "GB00B59G4Q73.L",
    "ISF.L",
    //"EMG.L",
    //"LMI.L",
    "RDSA.L",
    "TSCO.L",
    "MKS.L",
    "ULVR.L",
    "GSK.L",
    "RB.L"
];


const Application = ({children}) => {
    //console.info('Application.render', this);
    return (<div className="page"> { children && React.cloneElement(children, {symbols: symbols})} </div>);
};


render((
    <Router>
        <Route path="/" component={Application}>
            <IndexRoute component={QuotesPage}/>
            <Route path="/quotes" component={QuotesPage}/>
            <Route path="/historicals" component={HistoricalsPage}/>
        </Route>
    </Router>
), document.getElementById('root'));