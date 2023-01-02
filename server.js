const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("Server Running"));


const contactEmail = nodemailer.createTransport({
     host: "javivilchis.com",
     port: 465,
     secure: false, // upgrade later with STARTTLS
     auth: {
          user: process.env.user,
          pass: process.env.pass,
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
