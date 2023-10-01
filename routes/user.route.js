import express from "express" 
const router = express.Router() 
import upload from "../middlewares/multer.middleware.js"
import user from "../controllers/user.controller.js"
import isLoggedIn from "../middlewares/authenticate.middleware.js"
router.route("/").get((req, res, next )=>{
        return res.status(200).json({
                message : "At User Routes "
        })
        
})
router.route('/register')
        .post(upload.single("avatar"), user.register)
router.route("/login")
        .post(user.login)
router.route("/logout")
        .get(user.logout)
router.route("/me")
        .get(isLoggedIn,user.me) 
router.route("/updateUser" )
        .post( isLoggedIn,upload.single("avatar") , user.updateUser)
router.route("/forgot-password")
        .post(isLoggedIn , user.forgetPassword)
router.route("/reset-password/:resetPasswordToken")
        .post(isLoggedIn , user.resetPassword)
router.route("/userdetails/:id")
        .get(user.getUserDetails)
router.route("/followUser/:id")
        .post( isLoggedIn,  user.followUser)
router.route("/unfollowUser/:id")
        .delete( isLoggedIn, user.unfollowUser)
router.route("/authorBlogs")
        .post(user.getAuthorBlogs)
router.route("/getFollowers" )
        .get( isLoggedIn , user.getFollowers)
        
export default router 