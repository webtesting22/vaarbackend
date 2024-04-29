const express = require('express');
const router = express.Router();
const Blog = require('../modal/BlogSchema'); // Import the Blog model
require('../db/conn');

router.get('/', (req, res) => {
    res.send('Hello Vaar router');
});
router.get('/blogs', async (req, res) => {
    try {
      const blogs = await Blog.find();
      res.json(blogs);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  router.post('/hello', async (req, res) => {
    const { blogTitle, blogSubtitle, blogDescription, blogComment, image } = req.body;
    console.log("hellooooooghfgjhg",req.body)
    // console.log("qwertyuiopiuytrewqwertyuiopoiuytrewqwertyuiopoiuytwqwertyuiopoiuytrewqwertyuiopoiuytrew")
    
    try {
        // Check if any of the fields are empty
        if (!blogTitle || !blogSubtitle || !blogDescription || !blogComment) {
            return res.status(422).json({ error: "Please fill all the fields" });
        }

        // Check if blog with the same title already exists
        const blogExist = await Blog.findOne({ blogTitle: blogTitle });
        if (blogExist) {
            return res.status(422).json({ error: "Blog with the same title already exists" });
        }

        // Create and save the new blog
        const blog = new Blog({ blogTitle, blogSubtitle, blogDescription, blogComment, image });
        await blog.save();


        res.status(201).json({ message: "Blog Uploaded Successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error", details: error });
    }
});


module.exports = router;