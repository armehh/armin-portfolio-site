const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();

// Allow requests from your static site's domain (set FRONTEND_URL in .env / Render dashboard)
app.use(cors({ origin: process.env.FRONTEND_URL || "*" }));
app.use(express.json());

// Basic health check — useful to confirm the service is alive on Render
app.get("/", (req, res) => {
  res.send("Portfolio contact API is running.");
});

app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res
      .status(400)
      .json({ error: "Name, email, and message are all required." });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      family: 4, // force IPv4 — Render's default IPv6 route often times out reaching Gmail
      auth: {
        user: process.env.EMAIL_USER, // your Gmail address
        pass: process.env.EMAIL_PASS, // Gmail App Password (not your normal password)
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER, // sends to yourself
      replyTo: email,
      subject: `New portfolio message from ${name}`,
      text: `From: ${name} (${email})\n\n${message}`,
    });

    res.json({ success: true });
  } catch (err) {
    console.error("Email send failed:", err);
    res
      .status(500)
      .json({ error: "Failed to send message. Please try again later." });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Contact API listening on port ${PORT}`));
