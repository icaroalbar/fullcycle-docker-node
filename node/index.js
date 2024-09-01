const express = require("express");
const mysql = require("mysql");

const app = express();
const port = 3000;

const config = {
  host: "db",
  user: "app",
  password: "app",
  database: "app",
};

app.get("/add", async (_req, res) => {
  const connection = mysql.createConnection(config);
  const sql = `INSERT INTO people(name) values('Full Cycle Rocks!')`;
  await connection.query(sql);
  await connection.end();
  res.send("<h1>Dados adicionado com sucesso!</h1>");
});

app.get("/", async (_req, res) => {
  res.send("<h1>Full Cycle Rocks!</h1>");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port || 3000}`);
});
