import express from "express";
import {getByUserId, deleteBlog, getById, updateBlog, addBlog, getAllBlogs } from "../controllers/blog-controller.js ";
const blogRouter = express.Router();

blogRouter.get("/", getAllBlogs);
blogRouter.post("/add", addBlog);
blogRouter.put("/update/:id", updateBlog);
blogRouter.get("/:id", getById);
blogRouter.delete("/:id", deleteBlog);

//getting the blogs of the users: 
blogRouter.get('/user/:id', getByUserId);

export default blogRouter;

