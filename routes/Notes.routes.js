const express = require("express");
const { NoteModel } = require("../model/note.model");
const noteRouter = express.Router();

noteRouter.get("/", async(req, res) => {
const notes = await NoteModel.find()
  res.send(notes);
});


noteRouter.post("/addnote", async (req, res) => {
  const { title, subtitle, para } = req.body;
  try {
    const notes = new NoteModel({ title, subtitle, para });
    await notes.save();
    res.send({ msg: "data posted" });
    console.log("Data added successfully");
  } catch (err) {
    res.send({ msg: "Error to add notes", err: err.message });
  }
});

noteRouter.patch("/update/:id", async (req, res) => {
  const id = req.params.id;

  await NoteModel.findByIdAndUpdate({ _id: id } , req.body);
  res.send(`your ${id} has been updated`);
});

noteRouter.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;

  await NoteModel.findByIdAndDelete({ _id: id });
  res.send(`your ${id} has been deleted`);
});

module.exports = { noteRouter };
