import React from 'react';


function spark(
    canvas,                                             // canvas canvas element
    data                                                // an array of values from 0 to 1
) {
    console.info('data', data, data.length);

        var context = canvas.getContext('2d');             // get the 2d context
        context.fillStyle = 'orange';

        for (
            var
                i,                                      // iterator
                count = i = data.length,                // set the iterator and count to length of the data array
                h = canvas.height = canvas.offsetHeight,              // ensure we have the height adjusted for the size of the canvas
                w = canvas.width,                              // get the canvas width, COMPROMISE: w = canvas.width = canvas.offsetWidth;
                //barWidth = w / ~-count                  // calculate the width of the bar chart
                barWidth = 1                  // calculate the width of the bar chart
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




    componentDidMount() {
        console.info('Historical.componentDidMount', this);
        const x = this.refs.canvass;
        const values = this.props.values;
        //var data = [0, .8, 0.3, .5, .25, .75, 0.1, 1, 1, 1, 1, 1, 0.4, .9, .2,  .8, .3, .7, .4, .6, .5, 0.7, 0.4, 0.2, 0.5, 0.2, 0.3, 0.4, 0.4, 0.1, 0.6, 0.2, 0.4, 0.1, 0.3, 0.5, 0.6, 0.8, 0.7, 0];
        const max = values.reduce((p,c) => {
            //console.info('p,c', p, c);
            return p.Close > c.Close ? p : c;
        });
        const min = values.reduce((p,c) => {
            //console.info('p,c', p, c);
            return p.Close < c.Close ? p : c;
        });
        console.info('max/min', max.Close, min.Close);
        spark(x, values.map((x) => {
            var z = x.Close - min.Close;
            var gap = max.Close - min.Close;
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
                    <canvas ref="canvass" />
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




 function(
 canvas,                                             // canvas canvas element
 data                                                // an array of values from 0 to 1
 ) {
 with (canvas)                                       // add the canvas to the head of the scope chain
 for (
 var
 context = getContext("2d"),             // get the 2d context
 i,                                      // iterator
 count = i = data.length,                // set the iterator and count to length of the data array
 h = height = offsetHeight,              // ensure we have the height adjusted for the size of the canvas
 w = width,                              // get the canvas width, COMPROMISE: w = canvas.width = canvas.offsetWidth;
 barWidth = w / ~-count                  // calculate the width of the bar chart
 ;
 i--                                     // loop thru the data in reverse, until i === 0
 ;
 context.fillRect(                       // fill a rectangle...
 i * barWidth,                       // x position
 h,                                  // y position
 barWidth - 1,                       // width of bar (subtract 1 to separate bars)
 h * -data[i]                        // height of bar
 )
 );
 }

 var barchart = function(a,b){with(a)for(var c=getContext("2d"),d,e=d=b.length,f=height=offsetHeight,g=width,h=g/~-e;d--;c.fillRect(d*h,f,h-1,f*-b[d]));}
 var canvas = document.getElementById("canvas");
 var data = [.8, 0.6, 0.3, .5, .25, .75, 0.1, 1, 1, 1, 1, 1, 0.4, .9, .2,  .8, .3, .7, .4, .6, .5, 0.7, 0.4, 0.2, 0.5, 0.2, 0.3, 0.4, 0.4, 0, 0.6, 0.2, 0.4, 0.1, 0.3, 0.5, 0.6, 0.8, 0.7];
 barchart(canvas, data);
 */