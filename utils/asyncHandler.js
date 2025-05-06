const asyncHandler = (requestHandeler) => {
    (req,res,next) => {
        Promise.resolve(requestHandeler)(req, res,next ).
        catch((err) => next(err)) 

    }
}





export {asyncHandler}



const asyncHandler = (fn) => async (req, res, next) => {
    try {
        
    } catch (error) {
        res.status(error,code || 500).josn({
            success: false,
            message: error.message
        })
    }
}