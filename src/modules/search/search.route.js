import express from "express";
import { globalSearchControllers } from "./search.controllers.js";

const router = express.Router();

router.get("/global-search", globalSearchControllers);

export const  globalSearchRouter= router;
