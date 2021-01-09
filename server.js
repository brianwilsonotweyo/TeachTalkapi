import express from "express";
import mongoose from "mongoose";
import data from "./data.js";
import Videos from "./dbModel.js";

const app = express();
const port = process.env.PORT || 2021;
app.use(express.json());
app.use((req, res, next) =>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    next()
})
const connection =
  "mongodb+srv://brianotweyo:M55SCGl3BCaJLFmy@cluster0.nou09.mongodb.net/teachtalk?retryWrites=true&w=majority";
mongoose.connect(connection, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

app.get("/", (req, res) => res.status(200).send("hello"));
app.get("/v1/posts", (req, res) => res.status(200).send(data));
app.get("/v2/posts", (req, res) => {
  Videos.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});
app.post("/v2/posts", (req, res) => {
  const dbVideos = req.body;
  Videos.create(dbVideos, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.listen(port, () => {
  console.log(`Server started on ${port}`);
});
