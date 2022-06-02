// Get events by slug
const { events } = require("./data.json");

// Serve data
export default function handler(req, res) {
  // Limit to sepcific event
  // Return an array with a single event by slug
  const evt = events.filter((evt) => evt.slug === req.query.slug);

  if (req.method === "GET") {
    // return single event
    res.status(200).json(evt);
  } else {
    // Only allow Get method
    res.setHeader("Allow", [GET]);
    res.status(405).json({ message: `Method ${req.method} is not allowed` });
  }
}
