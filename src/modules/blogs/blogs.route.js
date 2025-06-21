import express from 'express';
import { BlogControllers } from './blogs.controllers.js';
const router = express.Router();

router.post('/create-blog', BlogControllers.createBlogControllers);

export const BlogRouter = router;
