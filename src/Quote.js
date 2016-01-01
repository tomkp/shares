import React from 'react';

import fraction from './Colors';
import percent from './Percent';

export default React.createClass({
    render() {
        const quote = this.props.quote;
        const percentage = percent(quote.PercentChange);
        let col = '#eee';
        if (percentage > 0) col = fraction(percentage / 10, 'eeffee', '00ff00');
        else if (percentage < 0) col = fraction(-percentage / 10, 'ffeeee', 'ff0000');
        const style = {
            background: '#' + col
        };

        return (
            <tr className="quote" style={style}>
                <td className="symbol">{quote.Symbol}</td>
                <td className="name">{quote.Name}</td>
                <td className="change">{Number(quote.Change).toFixed(2)}</td>
                <td className="percent-change">{percentage.toFixed(2)}%</td>
                <td className="latest">{Number(quote.LastTradePriceOnly).toFixed(2)}</td>
            </tr>
        );
    }

});