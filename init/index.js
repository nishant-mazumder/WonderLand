//this file main work is to push the data from data.js into MongoDB.

const mongoose = require("mongoose");  
const Listing = require("../models/listing.js"); // ../ parent directory
const initdata = require("./data.js"); // ./ current directory

//mongoose connection
main()
    .then(() => {
        console.log("MongoDB connection successful");
    })
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/airbnb"); //db name at last
}

const initDB = async () => {
    await Listing.insertMany(initdata.data);
    console.log("data was initialized");
}

initDB();