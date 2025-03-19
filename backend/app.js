import express from "express";
import cors from "cors";
import { readUsers } from "./crud-read.js";
const app = express();
const port = 3000;

app.use(cors()); // 모든 request에 대한 CORS 에러 처리

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/employees", async (req, res) => {
  try {
    const users = await readUsers();
    res.status(200).json(users);
  } catch (e) {
    console.log(e);
    res.status(500).send("DB 연결 오류가 발생했습니다.");
  }
});
app.post("/employees", (req, res) => {
  res.send("Create Users");
});
app.put("/employees/:id", (req, res) => {
  res.send("Update Users");
});
app.delete("/employees/:id", (req, res) => {
  res.send("Delete User");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
