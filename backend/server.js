// server.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connect = require('./config/dbConfig');
const userRouter = require('./routes/userRoute');
const isAuth = require('./routes/isAuth')
const cookieParser = require('cookie-parser');

dotenv.config();

const app = express();
const corsOptions = {
  origin: 'http://localhost:3000', // Allow requests from this origin
  credentials: true, // Allow cookies and credentials
};

// Use CORS middleware
app.use(cors(corsOptions));

app.use(express.json());
app.use(cookieParser());
connect();

const PORT = process.env.PORT || 5000;

app.use('/api/auth', isAuth)
app.use('/api/user', userRouter);


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
