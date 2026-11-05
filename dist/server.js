import express from "express";
import dotenv from 'dotenv';
dotenv.config();
//create express app
const app = express();
//Built in middleware
app.use(express.json());
//Health checkup route
app.get("/api/health", (req, res) => {
    res.status(200).json({
        status: "OK"
    });
});
//start server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log("Server running on the port", PORT);
});
//# sourceMappingURL=server.js.map