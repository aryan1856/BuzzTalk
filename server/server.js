import express from 'express';
import dotenv from 'dotenv';
import auth from './routes/auth.js';

const app = express();

dotenv.config();
const PORT = process.env.PORT || 5000;

app.get("/", (request, response) => {
    response.send("Server is ready");
});

// app.use(express.json())
app.use("/api/auth", auth);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));