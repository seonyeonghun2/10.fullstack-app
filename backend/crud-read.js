import { MongoClient } from "mongodb";
// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb+srv://demouser:demo1234@cluster0.t0bqn.mongodb.net/";
const client = new MongoClient(uri);
export async function readUsers() {
  try {
    await client.connect();
    const db = client.db("sample_mflix");
    const coll = db.collection("movies");
    const cursor = coll.find().limit(10); // document: 사용자 정보 10개 제한 (총 21,349개)
    const users = await cursor.toArray();
    // console.log(typeof users, users);
    return users;
  } catch (e) {
    console.log(e);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
// run().catch(console.dir);
