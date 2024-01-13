// api/routes/users.js
const express = require('express');
const jwt = require('jsonwebtoken');
const config = require('../../config');
const cookieParser = require('cookie-parser');
const router = express.Router();



module.exports = (User, Post) => {
  router.use(cookieParser());
  // Create a new user
  router.post('/', async (req, res) => {
    try {
      const user = await User.create(req.body);
      res.status(201).json(user);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });

  // Get all users
  router.get('/', async (req, res) => {
    try {
      const users = await User.findAll();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  // Get user by ID
  // Updated by JWT
  router.get('/:userId', async (req, res) => {
     // Extract the token from the Authorization header
     const token = req.headers.authorization && req.headers.authorization.split(' ')[1] || req.cookies.jwt;
     if (!token) {
       return res.status(401).json({ message: 'Unauthorized: Missing token' });
     }
 
     try {
       // Verify the token using the JWT secret
       const decoded = jwt.verify(token, config.jwtSecret);
 
       // Check if the decoded user ID matches the requested user ID
       if (decoded.id === req.params.userId) {
         const user = await User.findByPk(req.params.userId);
         if (user) {
           return res.status(200).json(user);
         } else {
           return res.status(404).json({ message: 'User not found' });
         }
       } else {
         return res.status(403).json({ message: 'Forbidden: Token does not match user ID' });
       }
     } catch (error) {
       return res.status(401).json({ message: 'Unauthorized: Invalid token' });
     }
   });


  // Update user by ID
  router.put('/:userId', async (req, res) => {
    const userId = req.params.userId;
    try {
      const [updatedRows] = await User.update(req.body, {
        where: { id: userId },
      });
      if (updatedRows > 0) {
        res.status(200).json({ message: 'User updated successfully' });
      } else {
        res.status(404).json({ message: 'User not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  // Delete user by ID
  router.delete('/:userId', async (req, res) => {
    const userId = req.params.userId;
    try {
      const deletedRows = await User.destroy({
        where: { id: userId },
      });
      if (deletedRows > 0) {
        res.status(200).json({ message: 'User deleted successfully' });
      } else {
        res.status(404).json({ message: 'User not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  return router;
};
