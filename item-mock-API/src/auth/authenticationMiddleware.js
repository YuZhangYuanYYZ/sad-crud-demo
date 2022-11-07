import jsonwebtoken from 'jsonwebtoken';
import { JWT_SECRET } from './config.js';

const isAuthorized = (req) => {
  const token = req.headers.authorization && req.headers.authorization.replace(/^Bearer\s+/, '');
  try {
    var decoded = jsonwebtoken.verify(token, JWT_SECRET);
    console.log(decoded);
    req.user = decoded.user;
    return true;
  } catch (err) {
    console.log(err);
  }
};
export const authenticationMiddleware = (req, res, next) => {
  if (isAuthorized(req)) {
    next();
  } else {
    res.sendStatus(401);
  }
};
