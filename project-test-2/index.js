const express = require("express");
const { connectToDb, getInventories } = require("./db");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, this is the root page!");
});

app.get("/api/Inventory", async (req, res) => {
  const { lowQuantity } = req.query;
  try {
    const inventories = await getInventories(lowQuantity);
    res.json(inventories);
  } catch (err) {
    console.error("Error fetching inventories:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(3000, () => {
  console.log("App is running at 3000");
  connectToDb();
});
