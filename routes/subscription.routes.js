import { Router } from "express";
import authorize from "../middlewares/auth.middleware.js";
import {
  createSubscription,
  getUserSubscriptions,
} from "../controllers/subscription.controller.js";

const subscriptionRouter = Router();

subscriptionRouter.get("/", (req, res) => {
  res.send({ message: "Get all subscriptions" });
});

subscriptionRouter.get("/:id", (req, res) => {
  res.send({ message: "Get subscription details" });
});

subscriptionRouter.post("/", authorize, createSubscription);

subscriptionRouter.put("/:id", (req, res) => {
  res.send({ message: "update subscription details" });
});

subscriptionRouter.delete("/:id", (req, res) => {
  res.send({ message: "delete subscription" });
});

subscriptionRouter.get("/user/:id", authorize, getUserSubscriptions);

subscriptionRouter.put("/:id/cancel", (req, res) => {
  res.send({ message: "cancel subscription" });
});

subscriptionRouter.get("/upcoming-renewals", (req, res) => {
  res.send({ message: "" });
});

export default subscriptionRouter;
  