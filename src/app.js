require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const studentRouter = require('../routers/studentRouter');


const port = process.env.port || 5000

const app = express();
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

app.use(express.json());
app.router(studentRouter);

// app.get("/students", async (req, res) => {
//   // ici tu mets ton code pour récupérer les étudiants
//   res.status(200).send("Liste des étudiants");
// });







app.listen(port, () => {
    console.log("Serveur est en ligne");

})

// app.get("/students", (req, res) => {
//     res.send({ message: "Hello Hawa!" })
    
// })

