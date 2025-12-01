const mongoose=require("mongoose");
const schema=mongoose.Schema;
const ListingSchema=new schema({
    task:{
        type:String,
        required:true,
    }
})

 const Listing= mongoose.model("Listing",ListingSchema);
module.exports= Listing;