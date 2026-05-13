const User = require("../model/userModel");
const Event = require("../model/eventModel");
const catchAsync = require("../utils/catchAsync");
const sendEmail = require("../utils/email");
const {
  hackathonTemplate,
  registrationTemplate,
} = require("../utils/constants");

const { getOne, getAll } = require("./handlerFactory");

exports.createUser = catchAsync(async (req, res) => {
  const {
    fullName,
    email,
    phoneNumber,
    occupation,
    churchName,
    branchName,
    churchUnit,
    location,
    // experienceLevel,
    // eventName,
    skill,
    stack,
    yearsOfExperience,
    participationIntent,
    webUrl,
  } = req.body;

  const user = await User.create({
    fullName,
    email,
    phoneNumber,
    occupation,
    // experienceLevel,
    churchName,
    branchName,
    churchUnit,
    location,
  });

  // console.log(user)

  await sendEmail({
    email: user.email,
    subject: "Registration Confirmed",
    html: registrationTemplate.replace("{{name}}", user.fullName),
  });

  if (skill) {
    const eventData = await Event.create({
      // eventName,
      skill,
      stack,
      yearsOfExperience,
      participationIntent,
      webUrl,
      participantId: user._id,
    });

    // console.log(user, eventData);

    await sendEmail({
      email: user.email,
      subject: "Hackathon Registration Confirmed",
      html: hackathonTemplate
        .replace("{{name}}", user.fullName)
        .replace("{{skill}}", eventData.skill)
        .replace("{{stack}}", eventData.stack)
        .replace("{{yearsOfExperience}}", eventData.yearsOfExperience)
        .replace("{{webUrl}}", eventData.webUrl)
        .replace("{{participationIntent}}", eventData.participationIntent),
    });
  }

  res.status(201).json({
    status: "success",
    message: "Registration complete. Please check your email.",
  });
});

exports.getMe = (req, res, next) => {
  req.params.id = req.user.id;
  next();
};

exports.getUser = getOne(User);
exports.getUsers = getAll(User);
