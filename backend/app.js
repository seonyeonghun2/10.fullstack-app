import express from "express";
import cors from "cors";
import { readUsers } from "./crud-read.js";
import { createUser } from "./crud-create.js";
import { deleteUser } from "./crud-delete.js";
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
app.post("/employees", async (req, res) => {
  console.log(req.body);
  // res.send("Create Users");
  try {
    const result = await createUser(req.body);
    res.status(201).json({
      status: "success",
      data: result,
    });
  } catch (e) {
    console.log("데이터 등록중 에러 : ", e);
    res.status(500).json({
      status: "fail",
      message: "서버 오류로 데이터 등록 실패",
    });
  }
});
app.put("/employees/:id", (req, res) => {
  res.send("Update Users");
});
app.delete("/employees/:id", async (req, res) => {
  try {
    const result = await deleteUser({_id: req.params.id});
    res.status(201).json({
      status: "success",
      message: "사원정보가 삭제되었습니다",
      data: result,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      status: "fail",
      message:
        "삭제요청 실패(데이터가 존재하지 않거나 이미 삭제된 데이터입니다)",
    });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
