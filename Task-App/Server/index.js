
const express = require('express');
const { connectToMongodb } = require('./Connection')
const taskRoutes = require('./Routes/tasks');

const app = express();
const port = 8000;

connectToMongodb("mongodb://127.0.0.1:27017/Task-App")
    .then(() => { console.log('mongodb is connected to server') })
    .catch(err => console.log(err));

app.use(express.json());

app.use('/api/tasks', taskRoutes);


app.get('/api/test', (req, res) => {
    res.json({ message: "backend is working" });
})

app.listen(port, () => {
    console.log("Server is online at: ", port);
})