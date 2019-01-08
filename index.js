const leakPw = require('pwned-pw')
const ratePw = require('zxcvbn')

const check = async (password) => {
  if (!(typeof password === 'string' || password instanceof String)) {
    throw new TypeError('Password must be a string')
  }

  // in case password is String object
  password = password.toString()

  const pwRating = ratePw(password)

  let pwnedCount
  try {
    pwnedCount = await leakPw.check(password)
  } catch (err) {
    console.log('Couldn\'t connect to pwned password API, assuming count is 0.')
    pwnedCount = 0
  }
  let result = pwRating.score - pwnedCount
  if (result < 0) result = 0
  return result
}

module.exports = { check }
