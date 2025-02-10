
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

import Token from '../models/token.js';

dotenv.config();

export const authenticateToken = (request, response, next) => {
    const authHeader = request.headers['authorization'];
    //split token and bearer
    
    const token = authHeader && authHeader.split(' ')[1];
  
    
    if (token == null) {
        return response.status(401).json({ msg: 'token is missing' });
    }

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (error, user) => {
        //succeful hai tu user nahi tu error
        if (error) {
            return response.status(403).json({ msg: 'invalid token' })
        }

        request.user = user;
        next();
        //agar sab kuch sahi hai tu age chalu
    })
}

export const createNewToken = async (request, response) => {
    const refreshToken = request.body.token.split(' ')[1];

    if (!refreshToken) {
        return response.status(401).json({ msg: 'Refresh token is missing' })
    }

    const token = await Token.findOne({ token: refreshToken });

    if (!token) {
        return response.status(404).json({ msg: 'Refresh token is not valid'});
    }

    jwt.verify(token.token, process.env.REFRESH_TOKEN_SECRET, (error, user) => {
        if (error) {
            response.status(500).json({ msg: 'invalid refresh token'});
        }
        const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1d'});

        return response.status(200).json({ accessToken: accessToken })
    })


}