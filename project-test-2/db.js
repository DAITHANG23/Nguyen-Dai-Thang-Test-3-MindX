const { MongoClient } = require("mongodb");

const uri =
  "mongodb+srv://thang:123@cluster0.wgrezy8.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);
let orderCollection, inventoryCollection, userCollection; // Declaring the collections here to make them accessible outside the connectToDb function

async function connectToDb() {
  try {
    await client.connect();
    console.log("Connected to MongoDB Atlas!");

    // Add your database operations here
    const db = client.db("project");
    orderCollection = db.collection("Order");
    inventoryCollection = db.collection("Inventory");
    userCollection = db.collection("Users");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
}

async function getInventories(lowQuantity) {
  try {
    let query = {};
    if (lowQuantity === "true") {
      query = { instock: { $lt: 100 } };
    }
    console.log("Query used to fetch products:", query);
    const inventories = await inventoryCollection.find(query).toArray();
    console.log("Fetched products:", inventories);
    return inventories;
  } catch (err) {
    console.error("Error fetching inventories:", err);
    throw err;
  }
}

// Exporting the collections and the connectToDb function
module.exports = {
  connectToDb,
  getInventories,
};
