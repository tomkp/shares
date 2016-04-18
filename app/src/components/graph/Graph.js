import React from "react";


export default React.createClass({

    componentDidMount() {

        const data = this.props.data;
        const canvas = this.refs['canvas'];
        const context = canvas.getContext('2d');
        const count = data.length;
        const y = canvas.height;
        const barWidth = (canvas.width) / count;

        context.fillStyle = 'rgba(0, 0, 0, 0.2)';

        for (var i = data.length - 1; i >= 0; i--) {
            let w = barWidth;
            let x = i * w;
            let h = y * -data[i];
            //console.log(`${i} ${x}, ${y}, ${w}, ${h}`);
            context.fillRect(Math.round(x), Math.round(y), Math.round(w), Math.round(h))
        }
    },

    render() {
        return (
            <canvas className="graph" ref="canvas" width={this.props.data.length}/>
        );
    }

});