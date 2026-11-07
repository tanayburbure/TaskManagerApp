import "dotenv/config";
import mongoose from "mongoose";
import connectDB from "./config/db.js";
import User from "./models/user.model.js";
import Task from "./models/task.model.js";

const testModels = async () => {
  try {
    await connectDB();

    // Create or find a test user
    let user = await User.findOne({
      email: "test@example.com"
    });

    if (!user) {
      user = await User.create({
        name: "Test User",
        email: "test@example.com",
        password: "Test@12345",
        phone: "9876543210",
        city: "Hyderabad"
      });
    }

    // Create a task linked to the user
    const task = await Task.create({
      title: "Complete MongoDB",
      description: "Practice Mongoose models",
      status: "PENDING",
      user: user._id
    });

    console.log("Task created:", task._id);

    // Test populate()
    const result = await Task.findById(task._id)
      .populate("user", "name email");

    console.log("Task with user details:");
    console.log(result);

  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  } finally {
    await mongoose.disconnect();
  }
};

testModels();
