const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  priority: {
    type: String,
    enum: ["High", "Medium", "Low"],
    default: "Medium",
  },
  status: {
    type: String,
    enum: ["TO DO", "IN_PROGRESS", "COMPLETED"],
    default: "To Do",
  },
  dueDate: {
    type: Date,
    required: true,
  },
  user: {
    type: String,
  },
  // user: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "User",
  // },
});

const Task = mongoose.model("Task", TaskSchema);

module.exports = Task;
