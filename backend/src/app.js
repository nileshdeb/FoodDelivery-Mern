//server create
const express = require("express");
const cookieParser = require("cookie-parser");

const authRoutes = require("./routes/auth.route");
const foodRoutes = require('./routes/food.route');
const cors= require('cors');

const app = express();

app.use(express.json());
app.use(cors({
  origin: ['http://localhost:5173', 'http://127.0.0.1:5173'],
  credentials: true,
}));
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.use('/api/auth',authRoutes);
app.use('/api/food',foodRoutes);

module.exports = app;
