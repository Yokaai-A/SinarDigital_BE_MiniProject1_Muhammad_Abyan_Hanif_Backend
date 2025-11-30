import express from "express";
import { getRecipes, addRecipe } from "../controllers/apiController.js";
import { recipeValidator } from "../middlewares/validator.js";

const router = express.Router();

router.get("/recipes", getRecipes);
router.post("/recipes", recipeValidator, addRecipe);

export default router;
