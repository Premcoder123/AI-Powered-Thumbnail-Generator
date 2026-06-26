const mongoose = require("mongoose");
const dns = require("dns");

const connectDB = async () => {
  try {
    try {
      dns.setServers(["8.8.8.8", "1.1.1.1"]);
    } catch (dnsError) {
      console.warn("Warning: Could not set custom DNS servers:", dnsError.message);
    }
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
