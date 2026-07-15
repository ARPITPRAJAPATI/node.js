const express = require('express')
const noteModel = require("./models/notes.model");
const { get } = require('mongoose');


const app = express();

app.use(express.json());

app.post("/notes" , async (req,res) => {
    const data = req.body
    await noteModel.create({
        title: data.title,
        description: data.description
    })
    res.status(201).json({
        message: "note created"
    })
})
app.get("/notes/:id", async(req,res) => {
    const id = req.params.id
    const notes = await noteModel.find({
        _id:id
    });

    res.status(200).json({
        message: "notes get",
        notes: notes
    })
})
app.delete("/notes/:id", async(req,res) => {
    const id = req.params.id
    const notes = await noteModel.findOneAndDelete({
        _id:id
    });

    res.status(200).json({
        message: "note deleted",
    })
})
app.patch("/notes/:id", async (req,res)=>{
    const id = req.params.id
    const description = req.body.description
    const updatedNote = await noteModel.updateOne({ _id:id} , {description:description}   

    );
    res.status(200).json({
            message: "Note updated successfully",
            note: updatedNote
        });
})


module.exports = app;;