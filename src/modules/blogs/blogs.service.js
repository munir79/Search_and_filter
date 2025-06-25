import { Blog } from "./blogs.model.js"

const createBlogIntoDb=async(payLoad)=>{
    const blog=await  Blog.create(payLoad);
    return blog;
}


 const getAllBlogsFromDb = async () => {

const blog=await Blog.find();
return blog
};


 export  const BlogService={createBlogIntoDb,getAllBlogsFromDb}