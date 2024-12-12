import express from "express"
import connectDB from "./src/db/index.js"
import dotenv from "dotenv"
dotenv.config();
import courseRoute from "./src/routes/course.routes.js"
import cors from "cors"


const app = express()
app.use(express.json());
app.use(cors());


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use("/api/v1", courseRoute);

connectDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`⚙️  Server is running at port : ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGO DB connection failed !!! ", err);
  });