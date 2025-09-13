const express = require("express");
const router = express.Router();
const bookController = require("../controllers/BookController");
const authMiddleware = require("../middleware/authMiddleware");

/**
 * @swagger
 * tags:
 *   name: Book
 *   description: Book management APIs
 */

/**
 * @swagger
 * /book/get-all:
 *   get:
 *     summary: Get all books
 *     tags: [Book]
 *     responses:
 *       200:
 *         description: List of books
 */
router.get("/book/get-all", authMiddleware, bookController.list);

/**
 * @swagger
 * /book/detail/{id}:
 *   get:
 *     summary: Get detail of a book by ID
 *     tags: [Book]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the book to fetch
 *     responses:
 *       200:
 *         description: Detail of a book
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 title:
 *                   type: string
 *                   example: The Pragmatic Programmer
 *                 author:
 *                   type: string
 *                   example: Andrew Hunt
 *                 year:
 *                   type: integer
 *                   example: 1999
 *       401:
 *         description: Unauthorized - invalid or missing token
 *       404:
 *         description: Book not found
 */
router.get("/book/detail/:id", authMiddleware, bookController.detail);

/**
 * @swagger
 * /book/add:
 *   post:
 *     summary: Add book
 *     tags: [Book]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - author
 *               - year
 *             properties:
 *               title:
 *                 type: string
 *               author:
 *                 type: string
 *               year:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Generate user token for JWT
 */
router.post("/book/add", authMiddleware, bookController.create);

/**
 * @swagger
 * /book/update/{id}:
 *   put:
 *     summary: Update a book
 *     tags: [Book]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the book to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               author:
 *                 type: string
 *               year:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Book updated successfully
 *       404:
 *         description: Book not found
 */
router.put("/book/update/:id", authMiddleware, bookController.update);

/**
 * @swagger
 * /book/delete/{id}:
 *   delete:
 *     summary: Delete a book
 *     tags: [Book]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the book to delete
 *     responses:
 *       204:
 *         description: Book deleted successfully (no content)
 *       404:
 *         description: Book not found
 */
router.delete("/book/delete/:id", authMiddleware, bookController.delete);

module.exports = router;
