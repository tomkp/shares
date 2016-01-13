import React from 'react';

import Historical from './Historical';

export default ({ values }) => (
    <table className="historicals">
        <tbody>
        {
            values
                .map((value) => <Historical values={value.historicals} symbol={value.symbol} key={value.symbol} />)
        }
        </tbody>
    </table>
);