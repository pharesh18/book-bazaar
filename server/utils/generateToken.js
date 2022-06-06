import jwt from 'jsonwebtoken';
const JWT_KEY = "abcd123";

export const generateToken = (id) => {
    return jwt.sign({ id }, JWT_KEY, {
        expiresIn: '15d'
    })
}

