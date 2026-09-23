import Message from "../models/Message.js";

// POST /api/contact — from the portfolio's Contact form
export const sendMessage = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "name, email, and message are all required" });
    }

    const saved = await Message.create({ name, email, message });
    res.status(201).json({ message: "Message received", id: saved._id });
  } catch (error) {
    res.status(500).json({ error: "Failed to save message" });
  }
};

// GET /api/contact  (protected) — so you can read messages sent to you
export const getMessages = async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch messages" });
  }
};
