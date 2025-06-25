import { Blog } from "../blogs/blogs.model";
import Product from "../products/products.model";



 export  const globalSearchService=async(searchText)=>{

    const regex=new RegExp(searchText,"i");

    const [products,blogs]=await  Promise.all([
        Product.find({tittle: {$regex:regex}}),
        Blog.find({title:{$regex:regex}})

    ]);


    return {
        products,blogs
    }


}