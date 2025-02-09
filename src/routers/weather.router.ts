import { Router } from "express";
import express from "express";
import { location, weather } from "../controllers/weather.controller";

const weatherRouter: Router = express.Router();

weatherRouter.get('/weather', weather)
weatherRouter.get('/location', location)

export default weatherRouter;