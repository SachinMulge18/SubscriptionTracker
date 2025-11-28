import { Router } from "express";
import { sendReminders } from "../controllers/workflow.controller.js";

const workflowRouter = Router();

workflowRouter.post("/subscription/reminder", sendReminders);

export default workflowRouter;


// msg_2KxcvJhoDgXHcSfRDzE1hxbNioVMMFMHTeqZquZuavuWE8SLPUfqgFh8WBHr8WWM1e6YqiGE5naTrrV9whjhqSEQBFj2s