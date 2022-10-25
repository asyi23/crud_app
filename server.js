const express = require('express');
const app= express();
const config = require('./config/config');
const mongoose = require('mongoose');
const peopleRouter = require('./routes/people');
const petsRouter = require('./routes/pets');
const cors = require('cors');


app.use(express.json());
app.use(cors());
app.use(peopleRouter);
app.use(petsRouter);

mongoose.connect(config.connectionString).then(()=>{
    console.log("Connected to database");
    app.listen(config.port,()=>{
        console.log("app listening on port" + config.port);
    });
}).catch(()=>{
    console.log("error connecting to database");
});

/*const people =[{
    name:"asyi",age:22,friends:"jimar"
}]

app.use('/people',peopleRouter);*/


