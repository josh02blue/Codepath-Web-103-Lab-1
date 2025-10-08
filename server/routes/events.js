import express from "express";
import EventsController from "../controllers/events.js";

const router = express.Router();

// Returns JSON for all events
router.get("/", EventsController.getEvents);

// Pretty URL for individual events
router.get("/:eventId", EventsController.getEventById);

export default router;
