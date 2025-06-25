import express from "express";
import { globalSearchControllers } from "./search.controllers.js";

const router = express.Router();

router.get("/", globalSearchControllers);

export const  globalSearchRouter= router;
