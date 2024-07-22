import express from 'express';
import path from "path";
import dotenv from 'dotenv';
import auth from './routes/auth.js';
import userRoutes from "./routes/userRoutes.js"
import messageRoutes from "./routes/messageRoutes.js"
import connectDB from './database/connectDB.js';
import cookieParser from 'cookie-parser';
import { app, server } from './socket/socket.js';
// import cors from 'cors';


const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();
// const cors = require('cors');

dotenv.config();

// app.get("/", (request, response) => {
//     response.send("Server is ready");
// });


// app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", auth);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.use(express.static(path.join(__dirname, "/client/dist")))

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
})

server.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on port ${PORT}`);
});