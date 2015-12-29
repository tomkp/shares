// rgb to hex eg: hex([255,0,100]) -> "#ff0064"
const hex = (rgb) => {
    return '#' + (1 << 24 | rgb[0] << 16 | rgb[1] << 8 | rgb[2]).toString(16).substr(1)
};


// hex to rgb eg: rgb("#ff0064") -> [255,0,100]
const rgb = (hex) => {
    hex = hex.replace("#", "0x");
    return [(hex >> 16) & 0xFF, (hex >> 8) & 0xFF, hex & 0xFF];
};


// eg: var colors = Colors.fraction(0.4, "#ff00ff", "#00ffff");
let fraction = (value, from, to) => {
    var i,
        res = [];
    if (value > 1) value = 1;
    if (value < 0) value = 0;
    from = rgb(from);
    to = rgb(to);
    for (i = 0; i < 3; i++) {
        res[i] = Math.abs(parseInt((from[i] + ((to[i] - from[i]) * value))));
    }
    return hex(res);
};


// eg: var colors = Colors.range(10, "#ff00ff", "#00ffff");
let range = (numIncrements, from, to) => {
    var inc,
        i,
        color,
        results = [];
    from = rgb(from);
    to = rgb(to);
    inc = [(to[0] - from[0]) / (numIncrements - 1),
        (to[1] - from[1]) / (numIncrements - 1),
        (to[2] - from[2]) / (numIncrements - 1)];
    results = [];
    for (i = 0; i < numIncrements; i++) {
        color = hex([
            parseInt(from[0] + (i * inc[0])),
            parseInt(from[1] + (i * inc[1])),
            parseInt(from[2] + (i * inc[2]))
        ]);
        results.push(color);
    }
    return results;
};


export {range, fraction};
