const mongoose = require("mongoose")

const blogSchema = new mongoose.Schema({
    blogTitle: {
        type: String,
        required: true
    },
    blogSubtitle: {
        type: String,
        required: true
    },
    blogDescription: {
        type: String,
        required: true
    },
    blogComment: {
        type: String,
        required: true
    },
    image:{
        type:String,
        // require:true
    }
    
})

const Blog = mongoose.model('VAARDATA', blogSchema);

module.exports = Blog;
