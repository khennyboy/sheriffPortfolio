import Message from "../models/Message.js";
import { sendContactEmail } from "../services/email.js";

export const sendMessage = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Name, email, and message are all required" });
    }

    const saved = await Message.create({ name, email, message });

    sendContactEmail({ name, email, message })

    res.status(201).json({ message: "Message received", id: saved._id });
  } catch (error) {
    console.error("Error in sendMessage:", error);
    res.status(500).json({ error: "Failed to save or send message" });
  }
};