// const mongoose = require("mongoose")
// const config = require("config")
const express = require('express')
const app = express()


app.use(express.json());

// const db = config.get("mongoURI");

// mongoose
//     .connect(db)
//     .then(() => console.log("Mongo Db Connected"))
//     .catch(err => console.log(err));

app.get('/', (req, res) => {
    res.send('Server Working!!' + port)
});

const port = process.env.PORT || 8000;
app.listen(port, () => `Server running on Port `);

