const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema(
  {
    eventName: {
      type: String,
      default: "Kingdom Stack Hackathon",
    },

    skill: {
      type: String,
      required: [true, "Please provide your primary skill"],
      enum: {
        values: ["frontend", "fullstack", "backend", "design", "other"],
        message:
          "Skill can only be frontend, fullstack, backend, design or other.",
      },
    },
    stack: {
      type: String,
      required: [true, "Please provide your stack."],
    },
    yearsOfExperience: {
      type: String,
      required: [true, "Please provide your years of experience"],
    },
    webUrl: {
      type: String,
      default: null,
      //   required: [true, "Please provide your years of experience"],
    },
    participationIntent: {
      type: String,
      required: [true, "Please provide your reason for participation"],
      maxlength: [300, "Intent cannot be more than 300 characters."],
    },
    participantId: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true },
);

const eventModel = mongoose.model("event", eventSchema);

module.exports = eventModel;
