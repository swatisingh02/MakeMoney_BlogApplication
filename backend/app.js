import express from "express";
import mongoose from "mongoose"
import blogRouter from "./routes/blog-routes.js";
import router from "./routes/user-routes.js";
import cors from 'cors';

const app = express();
app.use(cors());
// express has given all of its functionalities to the app variable.
app.use(express.json());
app.use("/api/user",router);
app.use("/api/blog", blogRouter);
mongoose.connect('mongodb+srv://admin:uByCH3ZXYIRyaaO7@cluster0.zjkm8fh.mongodb.net/Blog?retryWrites=true&w=majority')
.then(() => app.listen(8080))
.then(() => console.log("Connected To Database and Listening to Localhost 8080"))
.catch((err) => console.log(err));

