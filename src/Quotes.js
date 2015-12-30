import React from 'react';

import Quote from './Quote';

export default ({ quotes }) => (
    <table className="quotes">
        <tbody>
        {
            quotes
                .filter((quote) => quote.Open)
                .sort((a, b)=> {
                    const aPercentChange = a.PercentChange.substr(0, a.PercentChange.length -1);
                    const bPercentChange = b.PercentChange.substr(0, b.PercentChange.length -1);
                    return bPercentChange - aPercentChange;
                })
                .map((quote) => {
                    return <Quote quote={quote} key={quote.Symbol} />
                })
            }
        </tbody>
    </table>
);