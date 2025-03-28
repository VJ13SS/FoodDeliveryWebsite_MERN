import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";

//to craete token for each user
const createToken = (id) => {
  return jwt.sign({ id }, "random#secret"); //random#secret put this inside the .env file and use it here
};

//login user
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userModel.findOne({ email });

    if (!user) {
      return res.json({ success: false, message: "user does not exist" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.json({ success: false, message: "Invalid Credentials" });
    }

    const token = createToken(user._id);

    return res.json({ success: true, token });
  } catch (error) {
    console.log(error);
    return res.json({ success: true, message: "error" });
  }
};

//register user
const registerUser = async (req, res) => {
  const { name, password, email } = req.body;
  try {
    //checking if user exists already
    const exists = await userModel.findOne({ email });
    if (exists) {
      return res.json({ success: false, message: "User already exists" });
    }

    //validating email format and strong password
    if (!validator.isEmail(email)) {
      return res.json({ success: false, message: "Please enter valid email" });
    }

    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Please enter strong password",
      });
    }

    //hashing or encrypting password
    const salt = await bcrypt.genSalt(10); //give a number between 5 and 15..it will generate the hashing accordingly
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new userModel({
      name: name,
      email: email,
      password: hashedPassword,
    });

    const user = await newUser.save();
    const token = createToken(user._id);

    return res.json({ success: true, token });
  } catch (error) {
    console.log(error);
    return res.json({ success: true, message: "Error" });
  }
};

export { loginUser, registerUser };
