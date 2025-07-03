require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./Routes/route');

const mongo_url = process.env.MONGO_URI;
const port = process.env.PORT || 3000;

mongoose.connect(mongo_url).then(() => {
    const app = express();

    app.use(cors({
        origin: 'http://localhost:4200',
        credentials: true,
    }));
    app.use(express.json());
    app.use("/", routes);
    app.listen(port, () => { 
        console.log(`Server running on port ${port}`);
    });

});