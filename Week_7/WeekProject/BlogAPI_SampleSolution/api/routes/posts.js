// api/routes/posts.js
const express = require('express');
const router = express.Router();

module.exports = (Post, User, Category, Comment) => {
  // Create a new post
  router.post('/', async (req, res) => {
    try {
      const post = await Post.create(req.body);
      res.status(201).json(post);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });

  // Get all posts
  router.get('/', async (req, res) => {
    try {
      const posts = await Post.findAll({
        include: [
          { model: User, attributes: ['id', 'username'] },
          { model: Category, attributes: ['id', 'name'], through: { attributes: [] } },
          { model: Comment, attributes: ['id', 'text'], include: [{ model: User, attributes: ['id', 'username'] }] },
        ],
      });
      res.status(200).json(posts);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  // Get post by ID
  router.get('/:postId', async (req, res) => {
    const postId = req.params.postId;
    try {
      const post = await Post.findByPk(postId, {
        include: [
          { model: User, attributes: ['id', 'username'] },
          { model: Category, attributes: ['id', 'name'], through: { attributes: [] } },
          { model: Comment, attributes: ['id', 'text'], include: [{ model: User, attributes: ['id', 'username'] }] },
        ],
      });
      if (post) {
        res.status(200).json(post);
      } else {
        res.status(404).json({ message: 'Post not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  // Update post by ID
  router.put('/:postId', async (req, res) => {
    const postId = req.params.postId;
    try {
      const [updatedRows] = await Post.update(req.body, {
        where: { id: postId },
      });
      if (updatedRows > 0) {
        res.status(200).json({ message: 'Post updated successfully' });
      } else {
        res.status(404).json({ message: 'Post not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  // Delete post by ID
  router.delete('/:postId', async (req, res) => {
    const postId = req.params.postId;
    try {
      const deletedRows = await Post.destroy({
        where: { id: postId },
      });
      if (deletedRows > 0) {
        res.status(200).json({ message: 'Post deleted successfully' });
      } else {
        res.status(404).json({ message: 'Post not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  // Create a new post category
  router.post('/:postId/categories', async (req, res) => {
    const postId = req.params.postId;
    const categoryData = req.body;
    try {
      const post = await Post.findByPk(postId);
      if (!post) {
        return res.status(404).json({ message: 'Post not found' });
      }

      const category = await Category.create(categoryData);
      await post.addCategory(category);

      res.status(201).json(category);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });

  // Get categories for a specific post
  router.get('/:postId/categories', async (req, res) => {
    const postId = req.params.postId;
    try {
      const post = await Post.findByPk(postId, {
        include: [{ model: Category, attributes: ['id', 'name'] }],
      });
      if (!post) {
        return res.status(404).json({ message: 'Post not found' });
      }

      res.status(200).json(post.Categories);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  // Create a new comment for a post
  router.post('/:postId/comments', async (req, res) => {
    const postId = req.params.postId;
    const commentData = req.body;
    try {
      const post = await Post.findByPk(postId);
      if (!post) {
        return res.status(404).json({ message: 'Post not found' });
      }

      const comment = await Comment.create(commentData);
      await post.addComment(comment);

      res.status(201).json(comment);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });

  // Get comments for a specific post
  router.get('/:postId/comments', async (req, res) => {
    const postId = req.params.postId;
    try {
      const post = await Post.findByPk(postId, {
        include: [{ model: Comment, include: [{ model: User, attributes: ['id', 'username'] }] }],
      });
      if (!post) {
        return res.status(404).json({ message: 'Post not found' });
      }

      res.status(200).json(post.Comments);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  return router;
};
