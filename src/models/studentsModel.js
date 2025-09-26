const express = require('express');
const mongoose = require('mongoose');

const studentsModel = mongoose.model("students", mongoose.Schema())
const app = express();

app.get("/students", async(req, res) => {
    const students = await studentsModel.find();


    if (!students){
        res.status(404).send({
            message: "Operation echoue"
        });
        return;
    }
    res.send({
        message: "Operation reussie", students
    });
})

app.get("/students", async (req, res) => {
  try {
    const students = await studentsModel.find();
    res.json(students);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});