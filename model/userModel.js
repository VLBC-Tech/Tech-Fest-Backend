const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "Please tell us your name!"],
    },
    email: {
      type: String,
      unique: true,
      required: [true, "Please provide your email"],
      validate: [validator.isEmail, "Please provide a valid email"],
    },
    phoneNumber: {
      type: String,
    },
    occupation: {
      type: String,
      required: true,
      enum: {
        values: [
          "student",
          "software-developer",
          "designer",
          "product-manager",
          "pastor",
          "entrepreneur",
          "educator",
          "other",
        ],
      },
    },
    churchName: {
      type: String,
      required: [true, "Please provide your church name"],
    },
    branchName: {
      type: String,
      required: [true, "Please provide your church branch name"],
    },
    churchUnit: {
      type: String,
      required: [true, "Please provide your church unit"],
    },
    location: {
      type: String,
      required: [true, "Please provide your church location"],
    },
    password: {
      type: String,
      // required: [true, "Please provide a password"],
      minlength: 8,
      select: false,
      default: null,
    },
    passwordConfirm: {
      type: String,
      // required: [true, "Please confirm your password"],
      validate: {
        validator: function (el) {
          return el === this.password;
        },
        message: "Passwords are not the same!",
      },
      default: null,
    },
    // experienceLevel: {
    //   type: String,
    //   required: [true, "Please specify your experience level"],
    //   enum: {
    //     values: ["beginner", "intermediate", "professional"],
    //     message:
    //       "Experience level can only be Beginner, Intermediate or Professional",
    //   },
    // },
  },
  { timestamps: true },
);

userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword,
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

userSchema.methods.changedPasswordAfter = function (JWTTimestamp) {
  if (this.passwordChangedAt) {
    const changedTimestamp = parseInt(
      this.passwordChangedAt.getTime() / 1000,
      10,
    );

    return JWTTimestamp < changedTimestamp;
  }

  return false;
};

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
