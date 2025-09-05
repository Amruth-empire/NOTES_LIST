const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 30000, // wait up to 30s for server
      socketTimeoutMS: 45000          // close idle sockets after 45s
    });

    console.log("✅ MongoDB connected successfully!..");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error.message);
    process.exit(1);
  }
};

// Debugging events
mongoose.connection.on("connected", () => {
  console.log("✅ Mongoose connected to DB");
});
mongoose.connection.on("error", (err) => {
  console.error("❌ Mongoose error:", err);
});
mongoose.connection.on("disconnected", () => {
  console.log("⚠ Mongoose disconnected");
});

module.exports = connectDB;