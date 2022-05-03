const mongoose = require('mongoose');

const db = "mongodb+srv://Admin:1234@cluster0.6v51z.mongodb.net/todolist";
const connectDB = async () => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB is connected");
    } catch (err) {
        console.log("error")
    }
};

module.exports = connectDB;