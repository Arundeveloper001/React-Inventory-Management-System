const mongoose = require("mongoose");
const uri = "mongodb+srv://rohith:Rohith21122000@cluster0.wax9olo.mongodb.net/";


function main() {
    mongoose.connect(uri,{
        useNewUrlParser: true       
    }).then(() => {
        console.log("MongoDB Connected")
    
    }).catch((err) => {
        console.log("Error=====>: ", err)
    })
}

module.exports = { main };