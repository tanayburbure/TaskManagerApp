import "dotenv/config";
import mongoose from "mongoose";
import connectDB from "../config/db.js";
import User from "../models/user.model.js";

const seedAdmin = async () => {
  try {
    await connectDB();

    // Check whether an Admin already exists
    const existingAdmin = await User.findOne({ role: "ADMIN" });

    if (existingAdmin) {
      console.log("Admin already exists!");
      return;
    }

    // Create Admin
    await User.create({
      name: process.env.ADMIN_NAME,
      email: process.env.ADMIN_EMAIL,
      password: process.env.ADMIN_PASSWORD,
      role: "ADMIN"
    });

    console.log("Admin created successfully!");
  } catch (error) {
    console.error("Seeding failed:", error.message);
    process.exitCode = 1;
  } finally {
    await mongoose.disconnect();
  }
};

seedAdmin();
