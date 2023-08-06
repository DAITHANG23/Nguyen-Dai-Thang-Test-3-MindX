const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://thang:hfZSmH8hkqlQK4fC@cluster0.wgrezy8.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri);

async function run(expressApp) {
  try {
    await client.connect(() => {
      const database = client.db("your_db_name");
      db.inventories = database.collection("inventories");
      db.orders = database.collection("orders");
      db.users = database.collection("users");
    });

    const database = await client.db("project");
    const inventoryCollection = database.collection("Inventory");
    const item = inventoryCollection.findOne("_id");
    console.log(item);
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );

    expressApp.listen("3000", async () => {
      console.log(`Server is listening on port 3000`);
    });
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
