// Example: in the authentication route (api/routes/auth.js)
const jwt = require('jsonwebtoken');
const config = require('../../config');

// ... (user authentication logic)

// If authentication is successful, generate and send a JWT
const token = jwt.sign({ id: user.id }, config.jwtSecret, { expiresIn: '1h' });
res.status(200).json({ token, user: /* user data */ {}});
