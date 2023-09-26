const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
const port = 3000;
const secretKey = 'your-secret-key'; // Replace with a strong secret key

app.use(express.json());

// Dummy user data (in a real app, this would come from a database)
const users = [
  { id: 1, username: 'user1', password: 'password1' },
  { id: 2, username: 'user2', password: 'password2' },
];

// Middleware to generate JWT token on successful login
function generateToken(user) {
  return jwt.sign({ sub: user.id }, secretKey, { expiresIn: '1h' });
}

// Middleware to verify JWT token for protected routes
function authenticateToken(req, res, next) {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized - No token provided' });
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Unauthorized - Invalid token' });
    }

    req.user = decoded;
    next();
  });
}

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find((u) => u.username === username && u.password === password);

  if (!user) {
    return res.status(401).json({ message: 'Authentication failed' });
  }

  const token = generateToken(user);
  res.json({ token });
});

app.get('/dashboard', authenticateToken, (req, res) => {
  res.json({ message: 'Accessed the protected dashboard' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
