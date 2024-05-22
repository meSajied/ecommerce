const {generateApiKey} = require("generate-api-key");

function rateLimiter(req, res, next) {
  let apiKey = req.header('x-api-key');

  if(!apiKey) {
    apiKey = generateApiKey();
    res.header('x-api-key', apiKey);
  }

  const currentTime = Date.now();
  const windowSize = 60 * 1000;
  const maxRequests = 10;

  if (!requestCounts[apiKey]) {
    requestCounts[apiKey] = [];
  }

  requestCounts[apiKey] = requestCounts[apiKey].filter(timestamp => currentTime - timestamp < windowSize);

  if (requestCounts[apiKey].length >= maxRequests) {
    return res.status(429).json({ error: 'Too many requests' });
  }

  requestCounts[apiKey].push(currentTime);
  next();
}

module.exports = {rateLimiter};