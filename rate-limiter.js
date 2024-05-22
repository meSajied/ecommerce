const rateLimit = require('express-rate-limit');

rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 10,
  message: 'Too many requests, please try again after a minute',
  headers: true,
  keyGenerator: (req, res) => req.headers['x-api-key'],
});

module.exports = {rateLimit};
