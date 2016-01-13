import React from 'react';


export default React.createClass({
    render() {
        const symbol = this.props.symbol;
        const values = this.props.values;
           return (
            <tr className="historical">
                <td className="symbol">{symbol}</td>
                <td className="date">{values.map((x) => {
                    return x.Close
                })}

                </td>
            </tr>
        );
    }

});
/*
 var spark = function(a,b,c,d,e,f){with(a)for(d=c=b.length,e=height=offsetHeight;c--;f.lineTo(width*c/~-d,e-e*b[c]))f=getContext("2d");f.stroke()}
 var canvas = document.getElementById("canvas");
 var data = [0, .8, 0.3, .5, .25, .75, 0.1, 1, 1, 1, 1, 1, 0.4, .9, .2,  .8, .3, .7, .4, .6, .5, 0.7, 0.4, 0.2, 0.5, 0.2, 0.3, 0.4, 0.4, 0.1, 0.6, 0.2, 0.4, 0.1, 0.3, 0.5, 0.6, 0.8, 0.7, 0];
 spark(canvas, data);

 */