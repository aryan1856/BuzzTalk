import express from 'express';

const router = express.Router();

router.get("/login", (request, response) => {
    response.send("Login");
});

export default router;