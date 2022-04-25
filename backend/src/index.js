const express = require('express');
const connect = require('./configs/db')

const port = process.env.PORT || 2346

const cors = require("cors");

const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

const productController = require('./controllers/product.controller');
const adminController = require('./controllers/admin.controller');
const {login , register} = require('./controllers/auth.controller')

const app = express();
app.use(cors(corsOptions));
app.use(express.json());

app.post("/register", register);
app.post("/login", login);

app.use("/products",productController)
app.use("/admin",adminController)

app.listen(port,async function () {
    try{
        await connect();
        console.log(`Listening on port ${port}`)
    }catch(e){
        console.log(e)
    }
})