const mongoose = require('mongoose');
const DB = process.env.DATABSE;
mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connection success");
}).catch((err) => {
    console.error("Connection error:", err);
});