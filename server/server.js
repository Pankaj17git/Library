import connectToDB from './src/config/connectDB.js';
import http from 'http';
import express from 'express'
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const hostname = '127.0.0.1'; // localhost
const port = 8080;

const app = express();

//conect to our database
connectToDB();

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World from Node.js Server!\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

