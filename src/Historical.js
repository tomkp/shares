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
                })}</td>
            </tr>
        );
    }

});