import React from 'react';

import {fraction} from './Colors';

export default React.createClass({
    render() {
        const quote = this.props.quote;
        let col = '#eee';
        const percent = quote.PercentChange.substr(0, quote.PercentChange.length -1);
        if (percent > 0) col = fraction(percent / 10, "#eeffee", "#00ff00");
        else if (percent < 0) col = fraction(-percent / 10, "#ffeeee", "#ff0000");
        const style = {
            background: col
        };

        return (
            <tr className="quote" style={style}>
                <td className="symbol">{quote.Symbol}</td>
                <td className="name">{quote.Name}</td>
                <td className="change">{quote.Change}</td>
                <td className="percent-change">{quote.PercentChange}</td>
                <td className="latest">{quote.LastTradePriceOnly}</td>
            </tr>
        );
    }

});