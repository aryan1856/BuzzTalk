import express from 'express';
import dotenv from 'dotenv';
import auth from './routes/auth.js';
import connectDB from './database/connectDB.js';

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

// app.get("/", (request, response) => {
//     response.send("Server is ready");
// });

app.use(express.json());
app.use("/api/auth", auth);

app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on port ${PORT}`);
});