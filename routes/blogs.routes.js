import express from "express" 
const router = express.Router()
import isLoggedIn from "../middlewares/authenticate.middleware.js"
import blogs from "../controllers/blogs.controller.js"
import upload from "../middlewares/multer.middleware.js"
router.route("/getAllblogs")
        .get(blogs.getAllblogs)
router.route("/create-blog")
        .post(isLoggedIn , upload.single("thumbnail"),  blogs.createBlog) 
router.route("/getblog/:id")
        .get(blogs.getBlogById)
router.route("/update-blog/:id")
        .put(isLoggedIn, upload.single("thumbnail"), blogs.updateBlog ) 
router.route("/getblogByCategory/:category")
        .get(blogs.getBlogByCategory)
router.route("/delete-blog/:id")
        .delete( isLoggedIn,  blogs.deleteBlog )
router.route("/getAllComments/:id")
        .get(blogs.getAllCommentsOfABlog)
router.route("/writeComment/:id")
        .post( isLoggedIn , blogs.writeComments)
router.route("/removeComment/:id/:commentId")
        .delete( isLoggedIn ,  blogs.removeComments)
router.route("/likeBlog/:id")
        .post( isLoggedIn , blogs.likeBlog)
router.route("/unlikeBlog/:id")
        .delete( isLoggedIn,  blogs.unlikeBlog )
router.route("/")
        .get(blogs.getRecentBlog)
export default router

