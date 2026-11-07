import express from "express";
import dotenv from 'dotenv';
import connectDB from "../config/db.js";
import authRoutes from "../routes/auth.routes.js"

dotenv.config();

//create express app
const app = express();

//Built in middleware
app.use(express.json());

//Health checkup route
app.get("/api/health",(req,res) => {
    res.status(200).json({
        status : "OK"
    });
});

//Authentication routes
app.use("/api/auth",authRoutes);

//start server
const PORT = process.env.PORT || 8000;

const startServer = async () =>{
    await connectDB();
    app.listen(PORT, ()=> {
    console.log("Server running on the port",PORT)
});
}

startServer();
