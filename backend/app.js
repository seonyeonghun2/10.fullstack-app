// const express = require("express"); [오래된 CommonJS 방식]
import express from "express"; // 최신 자바스크립트 모듈방식(ES Module)
import cors from "cors";
import { readUsers } from "./crud-read.js";
const app = express();
const port = 3000;

app.use(cors()); // 모든 request에 대한 CORS 에러 처리:에러발생x

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/movies", async (req, res) => {
  try {
    const users = await readUsers();
    res.status(200).json(users);
  } catch (e) {
    console.log(e);
    res.status(500).send("DB 연결 오류가 발생했습니다.");
  }
});
app.post("/movies", (req, res) => {
  res.send("Create Users");
});
app.put("/movies/:id", (req, res) => {
  res.send("Update Users");
});
app.delete("/movies/:id", (req, res) => {
  res.send("Delete User");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
