// const asyncHanler = ()=>{

// }
function asyncHandler  (requestHandler){
    (req,res,next)=>{
        Promise.resolve(requestHandler()).catch((err)=> next(err))
    }

 
}


export {asyncHandler}

// const asyncHandler = (fn)=> async(req , res , next)=>{


//     try{


//         await fn(req , res , next)

        
//     }catch(err){
//         res.status(err.code || 500).json({
//             success:false,
//             message:"Something went wrong" || err.message

//         })
//     }
// }