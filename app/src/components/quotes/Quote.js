import React from "react";
import fraction from "./../Colors";
import percent from "./../Percent";
import Chart from "./../battery/Battery";
import HistoricalGraph from "../historicals/HistoricalGraph";

import "./quote.scss";

export default ({quote, historicals}) => {

    console.log(`Quote '${quote}' '${historicals}`);

    const percentage = percent(quote.PercentChange);
    let col = '#eee';
    if (percentage > 0) col = fraction(percentage / 10, 'eeffee', '00ff00');
    else if (percentage < 0) col = fraction(-percentage / 10, 'ffeeee', 'ff0000');
    const style = {
        background: '#' + col
    };

    return (
        <tr className="quote" style={style}>
            <td className="name-symbol">
                <a href={`https://finance.yahoo.com/q?s=${quote.symbol}`} className="name">{quote.Name}</a>
                <div className="symbol">{quote.Symbol}</div>
                {historicals?<HistoricalGraph values={historicals} />:''}
            </td>
            <td className="latest">{Number(quote.LastTradePriceOnly).toFixed(2)}</td>
            <td className="change">{Number(quote.Change).toFixed(2)}</td>
            <td className="percent-change">{percentage.toFixed(2)}%</td>
        </tr>
    );
}

/*            
<td>
 <Chart latest={quote.LastTradePriceOnly} hi52={quote.YearHigh} lo52={quote.YearLow}/>
 </td>
*/
