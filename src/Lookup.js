import axios from 'axios';

axios.get('http://query.yahooapis.com/v1/public/yql', {
        params: {
            q: 'select * from yahoo.finance.quotes where symbol in ("TSCO.L", "AAPL")',
            format: 'json',
            env: 'store://datatables.org/alltableswithkeys'
        }
    })
    .then(function (response) {
        console.log(response);
    })
    .catch(function (response) {
        console.log(response);
    });


/*
http://query.yahooapis.com/v1/public/yql?
q=
select * from yahoo.finance.quotes where symbol in ("TSCO.L", "AAPL")
&format=json
&
env=store://datatables.org/alltableswithkeys
 */