const express = require("express");
const cors = require("cors");
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
    // Uses Resend's HTTPS API instead of raw SMTP — Render's free tier blocks
    // outbound SMTP ports (465/587), but regular HTTPS (443) always works.
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Portfolio Contact Form <onboarding@resend.dev>",
        to: [process.env.EMAIL_USER], // sends to yourself
        reply_to: email,
        subject: `New portfolio message from ${name}`,
        text: `From: ${name} (${email})\n\n${message}`,
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      throw new Error(`Resend API error: ${response.status} ${errText}`);
    }

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
