import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  // Evitar que se conecte si estamos en un entorno de test
  if (process.env.NODE_ENV === "test") {
    console.log("🧪 Test environment detected. Skipping database connection.");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGO_URI || "");
    console.log("✅ MongoDB Connected");
  } catch (error) {
    console.error("❌ Error connecting to MongoDB:", error);
    process.exit(1);
  }
};

export default connectDB;
