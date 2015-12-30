import React from 'react';

import Quote from './Quote';
import percent from './Percent';


export default ({ quotes }) => (
    <table className="quotes">
        <tbody>
        {
            quotes
                .filter((quote) => quote.Open)
                .sort((a, b)=> {
                    return percent(b.PercentChange) - percent(a.PercentChange);
                })
                .map((quote) => {
                    return <Quote quote={quote} key={quote.Symbol} />
                })
            }
        </tbody>
    </table>
);