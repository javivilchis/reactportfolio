const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("Server Running"));

// const contactEmail = nodemailer.createTransport({
//      service: 'gmail',
//      auth: {
//           user: "javivilchis@gmail.com",
//           pass: "xxxxxxx",
//      },
// });
const contactEmail = nodemailer.createTransport({
     host: "javivilchis.com",
     port: 465,
     secure: false, // upgrade later with STARTTLS
     auth: {
          user: process.env.user,
          pass: process.env.pass,
          //user: "javi2021@javivilchis.com",// add these inside the .env as a variable
          //pass: "5*4Ae$_H){&@",// add these inside the .env as a variable
     },
});

contactEmail.verify((error) => {
     console.log("working on it");
     if (error) {
          console.log(error);
     } else {
          console.log("Ready to Send");
     }
});