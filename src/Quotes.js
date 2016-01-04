import React from 'react';

import Quote from './Quote';
import percent from './Percent';


export default ({ quotes }) => (
    <table className="quotes">
        <tbody>
        {
            quotes
                .filter((quote) => quote.PercentChange)
                .sort((a, b)=> percent(b.PercentChange) - percent(a.PercentChange))
                .map((quote) => <Quote quote={quote} key={quote.Symbol} />)
        }
        </tbody>
    </table>
);