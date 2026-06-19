const express = require("express");
const app = express();
const part = process.env.PORT||6700;
//to tell app,where static files-htlm/css/js are stored



app.use(express.static("frontend"));
app.listen(part,function(){
    console.log("app running on http://localhost:" + part);

});