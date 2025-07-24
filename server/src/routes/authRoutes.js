import User from "../models/User";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET;

const register = async (req, res) => {
  const { name, username, email, password, role } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(404).json({ message: 'User already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ name, username, email, password: hashedPassword, role });

    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Something went Wrong' })
  }
}

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: 'Invalid credential' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.statu0(404).json({ message: 'Invalid Password' });

    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '1d' });
    res.json({ token, user: { id: user._id, name: user.name, email: user.email, username: user.username, role: user.role } })
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
}

export {login, register}