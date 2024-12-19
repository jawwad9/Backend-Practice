import User from "../models/users.models.js"
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const generateAccessToken = (user) => {
  return jwt.sign({ email: user.email }, process.env.ACCESS_JWT_SECRET, {
    expiresIn: "6h",
  });
};
const generateRefreshToken = (user) => {
  return jwt.sign({ email: user.email }, process.env.REFRESH_JWT_SECRET, {
    expiresIn: "7d",
  });
};

// register user database funcation 
const registerUser = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (user) return res.status(401).json({ message: "user already " })

    const createUser = await User.create({
        email,
        password,
    })
    res.json({
        message: "user created",
        data: createUser
    })
}

// login user database funcation 
const loginUser = async (req, res) => {
    const { email, password } = req.body;

    if (!email) return res.status(400).json({ message: "email required" });
    if (!password) return res.status(400).json({ message: "password required" });

// email mujood ha bhi ya nahi ha
    const user = await User.findOne({ email: email });
    if (!user) return res.status(401).json({
        message: "user not found"
    });
// password match ha ya nahi ha
    const isValidPassword = await bcrypt.compare(password, user.password)
    if(!isValidPassword) return res.status(400).json({
        message: "invalid password"
    })

// token generate
    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);
  

// save user cookies
  res.cookie('refreshToken', refreshToken, {http: true, sucure: false})
    res.json({
        message: "user loggedIn successfully",
        accessToken, refreshToken,
        data: user,
    })
}

// logout user
const logoutUser = async (req, res) => {
     // cookies clear user
    res.clearCookie("refreshToken");
    res.json({ message: "user logout successfully" });
  };


  
// refreshtoken
const refreshToken = async (req, res) => {
    const refreshToken = req.cookies.refreshToken || req.body.refreshToken;
    if (!refreshToken)
      return res.status(401).json({ message: "no refresh token found!" });
  
    const decodedToken = jwt.verify(refreshToken, process.env.REFRESH_JWT_SECRET);
  
    const user = await User.findOne({ email: decodedToken.email });
  
    if (!user) return res.status(404).json({ message: "invalid token" });
  
    const generateToken = generateAccessToken(user);
    res.json({ message: "access token generated", accesstoken: generateToken });
  
    res.json({ decodedToken });
  };
  
  // authenticate user middleware
  const authenticateUser = async (req, res, next) => {
    const token = req.headers["authorization"];
    if (!token) return res.status(404).json({ message: "no token found" });
  
    jwt.verify(token, process.env.ACCESS_JWT_SECRET, (err, user) => {
      if (err) return res.status(403).json({ message: "invalid token" });
      req.user = user;
      next();
    });
  };
  


export { registerUser, loginUser, logoutUser }