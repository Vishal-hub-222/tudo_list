const express=require("express");
const app=express();
const path = require("path");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const Listing=require("./modules/listing.js")

app.get("/",(req,res)=>{
    res.send("this is vishal");
})

app.listen(3000,()=>{
    console.log("request on port 3000...");
})