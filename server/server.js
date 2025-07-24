import connectToDB from './src/config/connectDB.js';
import http from 'http';
import express from 'express'
import cors from 'cors';
import authRoutes from './src/routes/authRoutes.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const hostname = '127.0.0.1'; // localhost
const port = 8080;


app.use(cors());
app.use(express.json());
app.use('/api/auth', authRoutes);

//conect to our database
connectToDB();


app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});

