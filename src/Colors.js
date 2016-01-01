import hexToRgb from 'hex-rgb';
import rgbToHex from 'rgb-hex';


// (0.4, "ff00ff", "00ffff")
export default (value, from, to) => {
    var i, res = [];
    if (value > 1) value = 1;
    if (value < 0) value = 0;
    from = hexToRgb(from);
    to = hexToRgb(to);
    for (i = 0; i < 3; i++) {
        res[i] = Math.abs(parseInt((from[i] + ((to[i] - from[i]) * value))));
    }
    return rgbToHex(res[0], res[1], res[2]);
};

