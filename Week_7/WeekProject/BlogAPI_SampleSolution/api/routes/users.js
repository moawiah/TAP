// api/routes/users.js
const express = require('express');
const router = express.Router();

module.exports = (User, Post) => {
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
  router.get('/:userId', async (req, res) => {
    const userId = req.params.userId;
    try {
      const user = await User.findByPk(userId);
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({ message: 'User not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
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
