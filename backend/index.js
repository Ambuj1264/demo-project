require('dotenv').config();
const express=require("express")
const morgan = require("morgan");
const app=express();
const path= require("path")
const db=require("./connection/index")
const port= process.env.PORT || 5000                                          
const cors=require("cors")
const router=require("./routers/index")
app.use(cors())
const publicPath = path.join(__dirname, "public");
app.use(express.static(publicPath));

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(morgan('dev'));
app.use("/api",router)
app.get('/', (req, res) => {
  res.send('Hey this is my API running')
})
app.listen(port,()=>{
    console.log(`Listening on port ${port}`)
}
)

