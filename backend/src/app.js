// importing installed packages 
const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors')

// importing routes 
const { bookmarkRouter } = require('./routes/bookmark.routes.js')
const { mediaRouter } = require('./routes/media.routes.js')
const { userRouter } = require('./routes/user.routes.js')

// app instances 
const app = express();
// app.use(cors());



// Set up CORS headers
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', process.env.FRONTEND_URL);
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization');
    next();
});

// Middleware 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


// app.use(cors({
//     origin: [process.env.FRONTEND_URL],
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     credentials: true,
//     allowedHeaders: 'Content-Type,Authorization,application/json',
// }))


app.use(cors({
    origin: process.env.FRONTEND_URL, // Frontend URL
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true, // Allow cookies
    allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
}));


// routes 
app.use("/api", bookmarkRouter);
app.use("/api", mediaRouter);
app.use("/api", userRouter);

// home route 
app.get('/', (req, res) => {
    res.json({
        message: "Welcome to home route "
    })
})

// exporting 
module.exports = { app }

