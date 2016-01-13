import React from 'react';


export default React.createClass({
    render() {
       const historical = this.props.historical;
       return (
            <tr className="historical">
                <td className="symbol">{historical.Symbol}</td>
                <td className="date">{historical.Date}</td>
            </tr>
        );
    }

});