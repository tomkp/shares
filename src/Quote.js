import React from 'react';

import {fraction} from './Colors';

export default React.createClass({
    render() {
        const quote = this.props.quote;
        let col = '#eee';
        const percent = quote.cp;
        if (percent > 0) col = fraction(percent / 10, "#eeffee", "#00ff00");
        else if (percent < 0) col = fraction(-percent / 10, "#ffeeee", "#ff0000");
        const style = {
            background: col
        };

        return (
            <tr className="quote" style={style}>
                <td className="exchange-ticker">
                    <span className="exchange">{quote.e}</span>
                    <span className="ticker">{quote.t}</span>
                </td>
                <td className="c">{quote.c}</td>
                <td className="cp">{quote.cp}%</td>
                <td className="latest">{quote.l}</td>
            </tr>
        );
    }

});