import jsonwebtoken from 'jsonwebtoken';
import { JWT_SECRET } from './auth/config.js';
import { userList } from './userList.js';

const signJWTtoken = async ({ username }) => {
  return jsonwebtoken.sign({ user: username }, JWT_SECRET, { expiresIn: '2h' });
};

const isUserpasswordCorrect = ({ username, password }) => {
  return userList.find((user, index) => {
    if (username === user.username && password === user.password) {
      return true;
    }
  });
};
const userLoginHandler = async (req, res) => {
  const { username, password } = req.body;
  console.log(`${username} is trying to login ..`);

  if (isUserpasswordCorrect({ username, password })) {
    try {
      const token = await signJWTtoken({ username });
      res.status(200).json({
        token,
      });
    } catch (err) {
      res.sendStatus(401);
    }
  } else {
    return res.status(401).json({ message: 'The username and password your provided are invalid' });
  }
};

const userSignupHandler = async (req, res) => {
  const { username, password } = req.body;
  if (!(username && password)) {
    res.sendStatus(401);
  }
  console.log(`${username} is trying to sign up ..`);
  userList.push({ username, password });
  try {
    const token = await signJWTtoken({ username });
    res.status(200).json({
      token,
    });
  } catch (err) {
    console.log(err);
    res.sendStatus(401);
  }
};
export { userLoginHandler, userSignupHandler };
