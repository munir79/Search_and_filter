import { globalSearchService } from "./search.service";


export  const globalSearchControllers=async(req,res,next)=>{
    try{
     const {query}=req.query;
     
    if (!query) {
      return res.status(400).json({
        success: false,
        message: "Query parameter is required",
      });
    }


    const result=await globalSearchService(query);
     res.status(200).json({
      success: true,
      message: "Search results fetched",
      data: result,
    });

    }
    catch(err){
        next(err)
    }
}