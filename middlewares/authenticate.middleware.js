    // import { compareSync } from "bcryptjs"
import Apperror from "../utility/error.util.js"
    import JWT from "jsonwebtoken"
    const isLoggedIn = async (req , res, next) => { 
        console.log(req.headers)
        const token  = req.headers?.authentication?.split("=")[1]?.split(";")[0]
        console.log(req.headers?.authentication?.split("="))
        console.log(token)
        if(!token)  {  
            return res.status(400).json({
                success: false, 
                message : "You are not Logged In"
            })
        }   
        console.log("jfbsdj")
        try { 
            console.log("multer me hu ")
            const userDetails= await JWT.verify(token, process.env.JWT_SECRET) 
            
            req.user = userDetails
            console.log(req.user)
        }       
        catch(e) {
            return new Apperror(e.message ,400)
        }
        console.log("1234567u8654323456y54") 

        next()
    }
    export default isLoggedIn