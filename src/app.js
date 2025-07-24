require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const port = process.env.port || 5000

const app = express()
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
        console.log("Successfully connected to database");

    })
    .catch((error) => {
        console.error("Unable to connect to database:::", error);

    })

const Schema = mongoose.Schema ({
    nom : {
        type: String,
        required: true,
        trim: true,
    },

    level : {
        type: Number,
        required: true,
        min: 0,
    },

    grade: {
        type: Number,
        required: true,
        min: 0,
    },

    age : {
        type: [Number],
        default:[],
    }

})



const studentsModel = mongoose.model("students", mongoose.Schema())

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


app.listen(port, () => {
    console.log("Serveur est en ligne");

})

app.get("produits", (req, res) => {
    res.send({ message: "Hello Hawa!" })
    
})

