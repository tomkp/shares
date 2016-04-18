import React from "react";
import HistoricalGraph from "../historicals/HistoricalGraph";
import "./historical.scss";


export default ({symbol, values}) => {

    return (
        <tr className="historical">
            <td className="symbol">{symbol}</td>
            <td>
                <HistoricalGraph values={values} />
            </td>
        </tr>
    );
}

