import express from "express";
import indexRoutes from "./routes/index.js";
import apiRoutes from "./routes/apiRoutes.js";
import { errorHandler } from "./middlewares/errorHandler.js";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", indexRoutes);
app.use("/api", apiRoutes);

app.use(errorHandler);

export default app;
