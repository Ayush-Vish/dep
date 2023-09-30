    import Apperror from "../utility/error.util.js"
    import JWT from "jsonwebtoken"
    const isLoggedIn = async (req , res, next) => { 
        console.log(req)
        const {token }= req.cookies
        console.log(req.cookies)
        console.log(req.cookie)
        if(!token)  {  
            return res.status(400).json({
                success: false, 
                message : "You are not Logged In"
            })
        }   
        try { 
            const userDetails= await JWT.verify(token, process.env.JWT_SECRET) 
            req.user = userDetails
        }       
        catch(e) {
            return new Apperror(e.message ,400)
        }
        next()
    }
    export default isLoggedIn