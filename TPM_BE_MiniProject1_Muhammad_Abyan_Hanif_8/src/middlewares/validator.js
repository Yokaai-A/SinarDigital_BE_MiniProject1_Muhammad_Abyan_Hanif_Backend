export const recipeValidator = (req, res, next) => {
    const { name, category, difficulty } = req.body;
  
    if (!name || !category || !difficulty) {
      return res.status(400).json({ message: "Semua field harus diisi." });
    }
  
    next();
};
  