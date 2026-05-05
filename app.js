const express = require("express");
const userRouter = require("./routes/userRoute");
const AppError = require("./utils/AppError");
const globalErrorHandler = require("./controller/errorController");
const cors = require("cors");
const morgan = require("morgan");

const app = express();
app.use(express.json());

app.use(morgan("dev"));

app.use(
  cors({
    origin:
      process.env.NODE_ENV === "production"
        ? "https://tech-fest-black.vercel.app"
        : "http://localhost:3001",
  }),
);

app.use("/api/v1/user", userRouter);

app.all("/*splat", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);
module.exports = app;
