import fs from "fs";
import path from "path";
import { formatRecipe } from "../utils/helpers.js";

const dataPath = path.resolve("data/data.json");

export const getRecipes = (req, res) => {
  const data = JSON.parse(fs.readFileSync(dataPath));
  res.json(data);
};

export const addRecipe = (req, res) => {
  const recipes = JSON.parse(fs.readFileSync(dataPath));

  const newRecipe = formatRecipe(req.body); 
  recipes.push(newRecipe);

  fs.writeFileSync(dataPath, JSON.stringify(recipes, null, 2));

  res.json({ message: "Berhasil menambah resep", data: newRecipe });
};
