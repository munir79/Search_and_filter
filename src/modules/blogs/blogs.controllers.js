import { BlogService } from './blogs.service.js';

const createBlogControllers = async (req, res, next) => {
  try {
    const payLoad = req.body;
    const result = await BlogService.createBlogIntoDb(payLoad);
    res.status(200).json({
      success: true,
      message: 'blog created succesfully ',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const getAllBlogsController = async (req, res, next) => {
  try {
    const blogs = await BlogService.getAllBlogsFromDb();
    res.status(200).json({
      success: true,
      message: 'Blogs fetched',
      data: blogs,
    });
  } catch (err) {
    next(err);
  }
};

export const BlogControllers = { createBlogControllers, getAllBlogsController };
