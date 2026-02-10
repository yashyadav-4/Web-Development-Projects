
const express = require('express');
const { connectToMongodb } = require('./Connection')
const cookieParser= require('cookie-parser');
const taskRoutes = require('./Routes/tasks');
const authRoutes= require('./Routes/user');

const app = express();
const port = 8000;

connectToMongodb("mongodb://127.0.0.1:27017/Task-App")
    .then(() => { console.log('mongodb is connected to server') })
    .catch(err => console.log(err));

app.use(express.json());
app.use(cookieParser());

app.use('/api/user' , authRoutes);
app.use('/api/tasks', taskRoutes);

app.listen(port, () => {
    console.log("Server is online at: ", port);
})