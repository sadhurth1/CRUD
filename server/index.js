import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import route from './routes/userRouter.js';
import cors from "cors"

const app = express();
app.use(bodyParser.json());
app.use(cors());
dotenv.config();

const PORT = process.env.PORT;
const MONGOURL = process.env.MONGO_URL;

//this is my api
app.get("/", (req, res) => {
  res.send('Hellohehe');
});

mongoose
  .connect(MONGOURL)
  .then(() => {
    console.log('DB connected Successfully !');
    app.listen(PORT, () => {
      console.log(`Server running on port : ${PORT}`);
    });
  })
  .catch((error) => console.log(error));

app.use("/api", route);
