const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true ,useUnifiedTopology: true}
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const etudiantsRouter = require('./routes/etudiants');
const adminsRouter = require('./routes/admins');
const filieresRouter = require('./routes/filieres');


app.use('/etudiants', etudiantsRouter);
app.use('/admins', adminsRouter);
app.use('/filieres', filieresRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
