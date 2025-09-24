import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import eventsData from "../data/events.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

// Returns JSON for all events
router.get("/", (req, res) => {
  res.status(200).json(eventsData);
});

// Pretty URL for individual events
router.get("/:id", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../public/event.html"));
});

export default router;
