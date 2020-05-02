# ExchangeRateApi
> Wrapper for https://www.exchangerate-api.com/

## Installation

```sh
npm i @ivanvr/exchangerate-api-wrapper
```

## Usage example

```javascript
const ExchangeRateApi = require('@ivanvr/exchangerate-api-wrapper');
const exchangeRateApi = new ExchangeRateApi('[YOUR API_KEY FROM exchangerate-api.com]');
const response = await exchangeRateApi.latest('USD'); //ISO 4217 Three Letter Currency Codes
/*
response = {
	"result": "success",
	"documentation": "https://www.exchangerate-api.com/docs",
	"terms_of_use": "https://www.exchangerate-api.com/terms",
	"time_zone": "UTC",
	"time_last_update": 1580947200,
	"time_next_update": 1580950860,
	"base": "USD",
	"conversion_rates": {
		"USD": 1,
		"AUD": 1.4817,
		"BGN": 1.7741,
		"CAD": 1.3168,
		"CHF": 0.9774,
		"CNY": 6.9454,
		"EGP": 15.7361,
		"EUR": 0.9013,
		"GBP": 0.7679,
		"...": 7.8536,
		"...": 1.3127,
		"...": 7.4722, etc. etc.
	}
}

or if there was an error calling the api

{
  result: 'error',
  error: '[ERR DESCRIPTION]',
}

ex: {
  "result": "error",
  "error": "unknown-code"
}

*/
```

