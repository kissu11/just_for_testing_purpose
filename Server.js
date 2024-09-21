import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();

app.get('/', (req, res) => {
    res.send("This is the home page you visited");
});

app.get('/about', (req, res) => {
    res.send("A about page which provides some details about the company");
});

app.get('/login', (req, res) => {
    res.send("A login page where you have to login here");
});

app.get('/kissu', (req, res) => {
    res.send("1.I am the boss of this universe i have knowledge about every events. Knows all the details of the things (visible || invisible). how this universe works and what the universe really is.Where it ends and from where it starts. what is its really is, the science beside it and the logic. How everyting are inter-realated to each other and the different phases of life and the possiblities");
});

app.listen(process.env.PORT||3000,()=>{
    console.log("server is started");
})