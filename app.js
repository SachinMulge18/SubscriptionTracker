import express from "express";
import { PORT } from "./config/env.js";
import authRouter from "./routes/auth.routes.js";
import userRouter from "./routes/user.routes.js";
import subscriptionRouter from "./routes/subscription.routes.js";
import connectDB from "./database/mongodb.js";
import cookieParser from "cookie-parser";
import errorMiddleware from "./middlewares/error.middleware.js";
import arcjectMiddleware from "./middlewares/arcjet.middleware.js";
import workflowRouter from "./routes/workflow.routes.js";

const app = express();

// middleware to parse json request body
// this allow the app to accept json data in request body or the api calls
app.use(express.json());

// this helps us to process the form data sent via HTML forms in a simple format
app.use(express.urlencoded({ extended: false }));

// this helps us to parse the cookies sent by the client
app.use(cookieParser());
app.use(arcjectMiddleware);

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/subscriptions", subscriptionRouter);
app.use("/api/v1/workflows", workflowRouter);

app.use(errorMiddleware);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, async () => {
  console.log(`server is running on port ${PORT}`);
  // connect to database
  await connectDB();
});

export default app;
