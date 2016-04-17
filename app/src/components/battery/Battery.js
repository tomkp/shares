import React from "react";


export default React.createClass({

    componentDidMount() {
        if (this.props.latest && this.props.hi52 && this.props.lo52) {
            const value = (this.props.latest - this.props.lo52) / (this.props.hi52 - this.props.lo52);
            const canvas = this.refs['canvas'];
            const context = canvas.getContext('2d');
            const x = 0, y = 0, w = canvas.width, h = canvas.height;
            const height = value * h;
            context.fillStyle = 'rgba(0, 0, 0, 0.1)';
            context.fillRect(x, y, w, h);
            context.fillStyle = 'rgba(0, 0, 0, 0.3)';
            context.fillRect(x, y + (h - height), w, height);
        }
    },

    render() {
        return (
            <canvas className="battery" ref="canvas"/>
        );
    }

});