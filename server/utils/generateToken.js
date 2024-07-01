import jwt from 'jsonwebtoken';

const generateToken = (userId, response) => {
    const token = jwt.sign({userId}, process.env.SECRET_KEY, {expiresIn : '10d'})

    response.cookie('jwt', token, {
        httpOnly: true,
        maxAge : 15 * 24 * 60 * 1000,
        smaeSite : "strict"
    })
}

export default generateToken;