import express from "express";
import connectToMongoDB from "./db/connectToMongoDB.js";
import bookRoutes from "./routes/book.route.js";
import authRoutes from "./routes/auth.route.js"
import cors from "cors";
import path from "path";
import cookieParser from "cookie-parser";
import {app, server} from "./socket/socket.js";
// const app = express();


const __dirname = path.resolve();

// app.use("/",(req,res)=>{
//     res.send("Jay Shree Ram");
// });

app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use("/api",bookRoutes);
app.use("/api/auth",authRoutes);

// app.use(express.static(path.join(__dirname, "/frontend/build")));
// app.get("*", (req, res) => {
// 	res.sendFile(path.join(__dirname, "frontend", "build", "index.html"));
// });

server.listen(8000,()=>{
    connectToMongoDB();
    console.log("Server start running on port 8000");
})