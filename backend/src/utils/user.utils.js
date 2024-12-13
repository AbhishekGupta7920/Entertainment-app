const Jwt = require('jsonwebtoken')

// function to generate cookies 
// const generateCookie = (user, res, statusCode = 200, message) => {

//     const token = Jwt.sign({ _id: user._id }, process.env.TOKEN);

//     res.status(201).cookie("token", token, {
//         httpOnly: true,
//         maxAge: 24 * 60 * 60 * 1000,
//         sameSite: process.env.NODE_ENV === "development" ? "lax" : "none",
//         secure: process.env.NODE_ENV === "development" ? false : true
//     }).json({
//         success: true,
//         message: message,
//         data: user
//     })


//     // const token = Jwt.sign({ _id: user._id }, process.env.TOKEN); // Make sure the secret key is correct

//     // res.status(201).cookie("token", token, {
//     //     httpOnly: true,
//     //     maxAge: 24 * 60 * 60 * 1000,  // cookie will expire in 24 hours
//     //     sameSite: process.env.NODE_ENV === "development" ? "lax" : "none",
//     //     secure: process.env.NODE_ENV === "development" ? false : true // change to true in production
//     // }).json({
//     //     success: true,
//     //     message: message,
//     //     data: user
//     // });

// }

const generateCookie = (user, res, statusCode = 200, message) => {
    const token = Jwt.sign({ _id: user._id }, process.env.TOKEN, {
        expiresIn: "24h", // Token expiration
    });

    // Cookie options
    const isDevelopment = process.env.NODE_ENV === "development";
    const cookieOptions = {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000, // 24 hours
        sameSite: isDevelopment ? "lax" : "none", // "none" for cross-site cookies in production
        secure: !isDevelopment, // true in production (HTTPS)
    };

    console.log("Generated Token:", token);
    // Set cookie
    res.status(statusCode)
        .cookie("token", token, cookieOptions)
        .json({
            success: true,
            message,
            data: user,
            token: token,
            mag: "hello",
        });

        console.log("Cookie set:", res.getHeaders()["set-cookie"]);
};


module.exports = { generateCookie }