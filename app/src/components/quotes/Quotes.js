import React from 'react';

import Quote from './Quote';
import percent from './../Percent';
import "./quotes.scss";

export default ({ quotes, historicals }) => (

    <table className="quotes">
        <thead>
            <tr>
                <th> </th>
                <th className="latest">Latest</th>
                <th className="change">+/-</th>
                <th className="percent-change">+/- %</th>
            </tr>
        </thead>
        <tbody>
        {
            quotes
                .filter(quote => quote.PercentChange)
                .sort((a, b)=> percent(b.PercentChange) - percent(a.PercentChange))
                .map(quote => <Quote quote={quote} historicals={historicals[quote.Symbol]} key={quote.Symbol} />)
        }
        </tbody>
    </table>
);