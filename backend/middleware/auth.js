import jwt from 'jsonwebtoken'
//jwt is used for authentication and authorization in web applications

const authMiddleware = async (req,res,next) => {
    //this function takes the user token and convert it to user id which is used to perform add, remove, get items from cart
    const {token} = req.headers

    if(!token){
        return res.json({success:false,message:"Not Authorized..Login Again"})
    }
    try {
        const token_decode = jwt.verify(token,"random#secret")
        req.body.userId = token_decode.id
        next()
    } catch (error) {
        console.log(error)
        return res.json({success:false,message:'Error'})
    }
}

export default authMiddleware