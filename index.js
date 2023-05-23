import express from 'express' 
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import morgan from 'morgan'
import userRouter from './routes/user.js'
import productRouter from './routes/products.js'
import locationRouter from './routes/counties.js'
import message from './routes/message.js'
import answer from './routes/answer.js'
import help from './routes/help.js'
import testq from './routes/testq.js'
import testa from './routes/testa.js'
import agregateRouter from './routes/index.js'
import todos from "./routes/todos.js";
import reviewRouter from "./routes/todoReview.js";
    // "node": ">=14 <15"

const corsOptions ={
  origin:'*', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200,
}

const PORT=5000
const app=express()
dotenv.config()
app.use(morgan("dev"));
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use(cors(corsOptions));
app.get('/',(req,res)=>{
    console.log('hello');
})
app.listen(PORT,()=>{
    console.log('listening');
})

app.use('/users',userRouter)
app.use('/products',productRouter)
app.use('/message',message)
app.use('/help',help)
app.use('/answer',answer)
app.use('/testq',testq)
app.use('/testa',testa)
app.use('/stats',agregateRouter)
app.use("/api/todos", todos);
app.use("/api/review", reviewRouter);

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    app.listen(process.env.PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((error) => console.log(`${error} did not connect`));