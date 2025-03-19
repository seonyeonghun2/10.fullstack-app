import express from "express";
import cors from "cors";
import { readUsers } from "./crud-read.js";
const app = express();
const port = 3000;
// Built-in Middleware : 요청-응답 사이에 실행되는 특별한 함수
app.use(express.json()); // axios가 JSON으로 보내온 JSON 데이터를 인식 처리
app.use(express.urlencoded({ extended: true })); // axios가 JSON으로 보내온 폼 데이터를 인식 처리
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
  console.log(req.body.data);
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
