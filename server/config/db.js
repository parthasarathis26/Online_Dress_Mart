// server/config/db.js
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true, // Not needed in Mongoose v6+
      useUnifiedTopology: true // Not needed in Mongoose v6+
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`MongoDB Connection Failed: ${error}`);
    process.exit(1);
  }
};

module.exports = connectDB;
