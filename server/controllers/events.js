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

export default { getEvents };
