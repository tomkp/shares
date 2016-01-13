import axios from 'axios';
import moment from 'moment';

export default (symbol) => {
    //const symbolStr = symbols.map((s) => `"${s}"`).join(',');
    const from = moment().subtract(1, 'month').format('YYYY-MM-DD');
    const to = moment().format('YYYY-MM-DD');
    return axios.get('http://query.yahooapis.com/v1/public/yql', {
        params: {
            q: `select * from yahoo.finance.historicaldata where symbol in ("${symbol}") and startDate="${from}" and endDate="${to}"`,
            format: 'json',
            env: 'store://datatables.org/alltableswithkeys'
        }
    }).then((response) => {
        console.info('response:', response);
        return response.data.query.results.quote;
    });
}
