import express from 'express';
import dotenv from 'dotenv';
import auth from './routes/auth.js';
import messageRoutes from "./routes/messageRoutes.js"
import connectDB from './database/connectDB.js';
import cookieParser from 'cookie-parser';

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

// app.get("/", (request, response) => {
//     response.send("Server is ready");
// });

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", auth);
app.use("/api/messages", messageRoutes);

app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on port ${PORT}`);
});