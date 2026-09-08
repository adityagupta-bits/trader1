const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5001;
const DB_FILE = path.join(__dirname, "data", "db.json");

app.use(cors());
app.use(express.json());

function readDB() {
  if (!fs.existsSync(DB_FILE)) return { contacts: [], registrations: [] };
  return JSON.parse(fs.readFileSync(DB_FILE, "utf-8"));
}

function writeDB(data) {
  fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));
}

// REST APIs
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", service: "Traders @ BPHC API" });
});

app.post("/api/contact", (req, res) => {
  const { name, email, subject, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }
  const db = readDB();
  const entry = { id: Date.now().toString(), name, email, subject, message, date: new Date().toISOString() };
  db.contacts.push(entry);
  writeDB(db);
  res.status(201).json({ success: true, message: "Contact inquiry recorded", entry });
});

app.post("/api/register", (req, res) => {
  const { eventId, name, email } = req.body;
  if (!eventId || !name || !email) {
    return res.status(400).json({ error: "Missing required fields" });
  }
  const db = readDB();
  const entry = { id: Date.now().toString(), eventId, name, email, date: new Date().toISOString() };
  db.registrations.push(entry);
  writeDB(db);
  res.status(201).json({ success: true, message: "Registration recorded", entry });
});

app.listen(PORT, () => {
  console.log(`Traders API running at http://localhost:${PORT}`);
});
