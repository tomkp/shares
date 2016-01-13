import React from 'react';

import Historical from './Historical';

export default ({ historicals }) => (
    <table className="historicals">
        <tbody>
        {
            historicals
                .map((historical) => <Historical historical={historical} key={historical.Symbol + historical.Date} />)
        }
        </tbody>
    </table>
);