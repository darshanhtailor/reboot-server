import * as dotenv from 'dotenv';
dotenv.config()
const PORT = process.env.PORT || 5000;

import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js';

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());
app.use('/posts', postRoutes);

const setupDb = async()=>{
    try{
        mongoose.set('strictQuery', false);
        await mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true});
        app.listen(PORT, ()=>{ console.log(`Server started on port ${PORT}`)});
    } catch(err){
        console.error(err);
    }
}
setupDb();