import express from 'express';
import { BlogControllers } from './blogs.controllers.js';
const router = express.Router();

router.post('/create-blog', BlogControllers.createBlogControllers);
router.get('/get-all-blogs',BlogControllers.getAllBlogsController)

export const BlogRouter = router;
