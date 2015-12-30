import axios from 'axios';

export default (symbols, callback) => {
    const symbolStr = symbols.map((s) => `"${s}"`).join(',');
    axios.get('http://query.yahooapis.com/v1/public/yql', {
            params: {
                q: `select * from yahoo.finance.quotes where symbol in ('${symbolStr}')`,
                format: 'json',
                env: 'store://datatables.org/alltableswithkeys'
            }
        })
        .then((response) => {
            callback(response.data.query.results.quote);
        })
        .catch((response) => {
            console.error(response);
        });
}