const mongoose = require("mongoose");
const TaskSchema = new mongoose.Schema(
  {
    taskName: { type: String, required: true, trim: true },

    description: { type: String, trim: true },

    status: {
      type: String,
      required: true,
      enum: ["TODO", "INPROGRESS", "COMPLETED"]
    }
  },
  { timestamps: true }
);
module.exports = mongoose.model("Task", TaskSchema);
