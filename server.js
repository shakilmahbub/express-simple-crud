import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import router from './routes/api.js';
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
dotenv.config();
const mongourl = process.env.MONGODB_URL;
mongoose.connect(mongourl).then(()=>{
    console.log('Database connected');
}).catch((error) => {
    console.log(error);
});
app.use('/api',router);
app.listen(8001, ()=>{ console.log('Server is running on port 8001') });