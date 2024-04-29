const mongoose = require("mongoose")

const ImageDetailsSchema = new mongoose.Schema(
    {
        image:String
    },
    {
        collation:"ImagesDetails"
    }
);
mongoose.model("ImageDetails", ImageDetailsSchema);