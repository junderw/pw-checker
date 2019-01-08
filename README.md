# pw-checker

## What it does

* It uses zxcvbn to check strength of password.
* It subtracts the pwn count of HIBP password API.
* It gives a rating of 0-4
  * 0-2 is bad
  * 3-4 is good

## Usage

```javascript
const pw = require('pw-checker')

// returns Promise<number> between 0-4
pw.check('123456').then(result => {
  console.log('My result is ' + result)
  // 0
})
```
