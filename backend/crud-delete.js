import { MongoClient, ObjectId } from "mongodb";
// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb+srv://demouser:demo1234@cluster0.t0bqn.mongodb.net/";
const client = new MongoClient(uri);
export async function deleteUser(target) {
  try {
    await client.connect();
    const db = client.db("hr");
    const coll = db.collection("employees");    
    // const result = await coll.deleteOne({_id: new ObjectId(target._id)});  
    // ID 문자열을 ObjectId로 변환
    const objectId = new ObjectId(target._id);
    console.log(typeof objectId);
    // 변환된 ObjectId로 문서 찾기 시도
    const docToDelete = await coll.findOne({ _id: objectId });
    console.log("Document to delete:", docToDelete);
    if (!docToDelete) {
      console.log("문서를 찾을 수 없습니다. ID가 정확한지 확인하세요.");
      return {
        acknowledged: true,
        deletedCount: 0,
        message: "문서를 찾을 수 없음",
      };
    }

    const result = await coll.deleteOne({ _id: objectId });
    console.log("Delete result:", result);  
    return result;
  } catch (e) {
    console.log(e);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
// run().catch(console.dir);
