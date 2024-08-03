import express from 'express';
import mongoose from 'mongoose';
import { userRoutes } from './Routes/user.route.js';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const app = express();
app.use(express.json());

app.use("/api/user", userRoutes);
app.use("/static", express.static('./static/'));


const __dirname = dirname(fileURLToPath(import.meta.url));
app.get('/', (req,res) => {
    res.sendFile(join(__dirname, 'index.html'));
});
app.get('/login.html', (req,res) => {
    res.sendFile(join(__dirname, 'login.html'));
});
app.get('/userRegister.html', (req,res) => {
    res.sendFile(join(__dirname, 'userRegister.html'));
});

mongoose.connect('mongodb+srv://samarthraj756:AbNH1RmD5Uw9JsZ6@crud-app.4zl8vot.mongodb.net/?retryWrites=true&w=majority&appName=CRUD-App').then(() => {
    console.log('Connected to MongoDB');
    app.listen(3100, () => {
        console.log('Server listing on port: 3100');
    });
})
    .catch((err) => {
        console.log('Connection Failed', err);
    });

app.get('/', (req, res) => {
    res.send('Hello World From CRUD App');
});
