import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.send(`
    <h1>Selamat Datang diRecipeInfo</h1>
    <a href="/form">Tambah Resep</a> | 
    <a href="/api/recipes">Lihat Resep</a>
  `);
});

router.get("/form", (req, res) => {
  res.send(`
    <h2>Tambah Resep Baru</h2>
    <form action="/api/recipes" method="POST">
      <input name="name" placeholder="Nama Resep"><br>
      <input name="category" placeholder="Kategori"><br>
      <input name="difficulty" placeholder="Tingkat Kesulitan"><br>
      <button type="submit">Submit</button>
    </form>
  `);
});

export default router;
