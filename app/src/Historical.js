import React from 'react';


function spark(
    canvas,                                             // canvas canvas element
    data                                                // an array of values from 0 to 1
) {
    console.info('data', data, data.length);

        var context = canvas.getContext('2d');             // get the 2d context
        context.fillStyle = 'rgba(255, 255, 255, 0.5)';

        for (
            var
                i,                                      // iterator
                count = i = data.length,                // set the iterator and count to length of the data array
                h = canvas.height = canvas.offsetHeight,              // ensure we have the height adjusted for the size of the canvas
                w = canvas.width,                              // get the canvas width, COMPROMISE: w = canvas.width = canvas.offsetWidth;
                barWidth = w / ~-count                  // calculate the width of the bar chart
                //barWidth = 1                  // calculate the width of the bar chart
            ;
            i--                                     // loop thru the data in reverse, until i === 0
            ;
            context.fillRect(                       // fill a rectangle...
                i * barWidth,                       // x position
                h,                                  // y position
                //barWidth - 1,                       // width of bar (subtract 1 to separate bars)
                barWidth,
                h * -data[i]                        // height of bar
            )
        );
}


export default React.createClass({


    price(x) {
      return x['Close'];
    },

    componentDidMount() {
        console.info('Historical.componentDidMount', this);
        const x = this.refs.canvass;
        const values = this.props.values;
        const max = values.reduce((p,c) => {
            return this.price(p) > this.price(c) ? p : c;
        });
        const min = values.reduce((p,c) => {
            return this.price(p) < this.price(c) ? p : c;
        });
        spark(x, values.map((x) => {
            var z = this.price(x) - this.price(min);
            var gap = this.price(max) - this.price(min);
            return z / gap;
        }));
    },

    render() {
        const symbol = this.props.symbol;
        const values = this.props.values;
           return (
            <tr className="historical">
                <td className="symbol">{symbol}</td>
                <td>
                    <canvas ref="canvass" width="400" />
                </td>
            </tr>
        );
    }

});
