const express=require("express");
const app= express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

const db = require("./app/models");
db.sequelize
    .sync({ force: false, alter: true })
    .then(() => {
        console.log("Reservation App Synced db.");
        //initial();  only for one time
    })
    .catch((err) => {
        console.log("Failed to sync db: " + err.message);
    });
app.get("/",(req,res)=>{
    res.json({message:"Reservation Project"});
});

require("./app/routes/passengers.routes")(app);

app.listen(8080,()=>{
    console.log("App Server is Running");
});