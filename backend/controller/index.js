const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { successResponse, errorResponse } = require("../utils/apiResponses");
const User = require("../model/myModel");
const auth = {
  login: async (req, res) => {
    try {
      const { email, password } = req.body;

      // Check if user exists
      const user = await User.findOne({ email });
      if (!user) {
        return errorResponse(res, 401, "Invalid email or password");
      }

      // Check if password is correct
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return errorResponse(res, 401, "Invalid email or password");
      }

      // Generate JWT token
      const token = jwt.sign({ userId: user._id }, "Ambuj1264", {
        expiresIn: "1h",
      });

      return successResponse(res, { token,user });
    } catch (error) {
      console.error("Error in normal login:", error);
      return errorResponse(res, 500, "Internal Server Error");
    }
  },
  signup: async (req, res) => {
    try {
      const { name, email, password } = req.body;

      // Check if user with same email already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return errorResponse(res, 400, "Email already registered");
      }

      // Hash password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create new user
      const newUser = new User({ name, email, password: hashedPassword });
      await newUser.save();

      return successResponse(res, { message: "User created successfully" });
    } catch (error) {
      console.error("Error in signup:", error);
      return errorResponse(res, 500, "Internal Server Error");
    }
  },

  googleproviderLogin: async (req, res) => {
    try {
      const { name, email } = req.body;

      // Check if user with same email already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return errorResponse(res, 400, "Email already registered");
      }

      // Generate random string password
      const randomStringPassword = Math.random().toString(36).slice(-8);
      const hashedPassword = await bcrypt.hash(randomStringPassword, 10);

      // Create new user
      const newUser = new User({ name, email, password: hashedPassword });
      await newUser.save();

      return successResponse(res, {
        message: "User created successfully",
        password: randomStringPassword,
      });
    } catch (error) {
      console.error("Error in Google provider login:", error);
      return errorResponse(res, 500, "Internal Server Error");
    }
  },
};

module.exports = auth;
