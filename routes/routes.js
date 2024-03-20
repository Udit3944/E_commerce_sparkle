import express from "express";
import {
  homeController,
  ContactUserController,
} from "../controllers/homeController.js";
const routes = express.Router();

routes.get("/", homeController);
routes.post("/", ContactUserController);

export default routes;
