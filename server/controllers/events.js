// server/controllers/events.js
import { pool } from "../config/database.js";

const getEvents = async (req, res) => {
  try {
    const { rows } = await pool.query(`
      SELECT
        id,
        name,
        pricepoint   AS "pricePoint",
        audience,
        image,
        description,
        submittedby  AS "submittedBy",
        submittedon  AS "submittedOn"
      FROM events
      ORDER BY id ASC;
    `);
    res.status(200).json(rows);
  } catch (error) {
    console.error("Error fetching events:", error);
    res.status(500).json({ error: "Failed to fetch events" });
  }
};

const getEventById = async (req, res) => {
  try {
    const selectQuery = `
      SELECT name, pricePoint, audience, image, description, submittedBy, submittedOn
      FROM events
      WHERE id=$1
    `;

    const eventId = req.params.eventId;
    const results = await pool.query(selectQuery, [eventId]);
    res.status(200).json(results.rows[0]);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};

export default { getEvents, getEventById };
