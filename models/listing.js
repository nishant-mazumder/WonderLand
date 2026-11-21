const mongoose = require("mongoose");  
const Schema = mongoose.Schema;

//defining schema
const listingSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        filename: {
            type: String,
            default: "listingimage"
        },
        url: {
            type: String,
            default: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/31/d8/3e/18/piscina.jpg?w=900&h=-1&s=1",
            set: (v) => 
                v === "" 
                    ? "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/31/d8/3e/18/piscina.jpg?w=900&h=-1&s=1" 
                    : v,
        },
    },
    price: {
        type: Number,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
});

//MODEL ("Listing" will be converted to listings --> model name )
const Listing = mongoose.model("Listing", listingSchema);

//export to main index.js(here mongo_express_2.js)
module.exports = Listing;