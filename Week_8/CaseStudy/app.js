const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const port = 3000;
const secretKey = 'your-secret-key'; // Replace with a strong secret key

app.use(express.json());

// Dummy user data (in a real app, this would come from a database)
const users = [
  { id: 1, username: 'user1', password: 'password1', roles: ['user'], permissions: ['read'] },
  { id: 2, username: 'admin', password: 'admin123', roles: ['admin'], permissions: ['read', 'write'] },
];

// Middleware to generate JWT token
function generateToken(user) {
  return jwt.sign({ sub: user.id, roles: user.roles, permissions: user.permissions }, secretKey, { expiresIn: '1h' });
}

// Middleware to authenticate and authorize users
function authenticateAndAuthorize(req, res, next) {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized - No token provided' });
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
        console.log(err);
        console.log(token);
      return res.status(401).json({ message: 'Unauthorized - Invalid token' });
    }

    req.user = decoded;

    // Check if the user has the required role or permission to access the route
    if (
      (req.user.roles.includes('admin') || req.user.permissions.includes('write')) &&
      req.path === '/admin/records'
    ) {
      next();
    } else if (req.path === '/user/records') {
      next();
    } else {
      return res.status(403).json({ message: 'Forbidden - Insufficient permissions' });
    }
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

app.get('/user/records', authenticateAndAuthorize, (req, res) => {
  // Endpoint to fetch user-specific records
  res.json({ message: 'User records accessed successfully' });
});

app.get('/admin/records', authenticateAndAuthorize, (req, res) => {
  // Endpoint to fetch admin-specific records
  res.json({ message: 'Admin records accessed successfully' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
