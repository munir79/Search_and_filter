import { Blog } from "./blogs.model.js"

const createBlogIntoDb=async(payLoad)=>{
    const blog=await  Blog.create(payLoad);
    return blog;
}


 export  const BlogService={createBlogIntoDb}