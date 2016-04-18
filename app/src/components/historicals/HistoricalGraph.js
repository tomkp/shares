import React from "react";
import Graph from "../graph/Graph";
import "./historical.scss";


export default ({values}) => {

    console.log(`HistoricalGraph '${values}'`);

    const price = (x) => {
        return x['Close'];
    };

    const min = values.reduce((p, c) => {
        return price(p) < price(c) ? p : c;
    });

    const max = values.reduce((p, c) => {
        return price(p) > price(c) ? p : c;
    });
    const data = values.map((x) => {
        var z = price(x) - price(min);
        var gap = price(max) - price(min);
        return z / gap;
    });

    return <Graph data={data}/>;
}

