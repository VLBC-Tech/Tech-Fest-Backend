const Event = require("../model/eventModel");
const User = require("../model/userModel");
const catchAsync = require("../utils/catchAsync");
const sendEmail = require("../utils/email");
const { hackathonApproved } = require("../utils/constants");

exports.getEvent = catchAsync(async (req, res, next) => {
  let query = Event.findOne({ participantId: { $eq: req.params.id } });
  const doc = await query;

  if (!doc) {
    return next(new AppError("No document found with that ID", 404));
  }

  res.status(200).json({
    status: "success",
    data: {
      data: doc,
    },
  });
});

exports.approveEntry = catchAsync(async (req, res, next) => {
  const userId = req.params.id;
  const value = req.body.value;

  const user = await User.findById(userId);

  if (!user) {
    return new next(new AppError("No user found with that ID", 404));
  }
  await Event.findOneAndUpdate(
    { participantId: { $eq: userId } },
    { approved: value },
  );

  if (value)
    await sendEmail({
      email: user.email,
      from: process.env.EMAIL_FROM, // must be verified
      subject: "Hackathon Entry Approved",
      html: hackathonApproved.replace("{{participantName}}", user.fullName),
    });

  res.status(200).send({
    status: "success",
    message: "Hackathon Entry approved successfully",
  });
});
