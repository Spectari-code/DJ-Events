// using common js syntax becuase this is running server side
const { events } = require("./data.json");

// Serve data
export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(events);
  } else {
    // Only allow Get method
    res.setHeader("Allow", [GET]);
    res.status(405).json({ message: `Method ${req.method} is not allowed` });
  }
}
