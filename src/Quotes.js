import React from 'react';

import Quote from './Quote';

export default ({ quotes }) => (
    <table className="quotes">
        <tbody>
        {quotes.sort((a, b)=> {
            return a.cp < b.cp;
        }).map((quote) => {
            return <Quote quote={quote} key={quote.id} />
        })}
        </tbody>
    </table>
);