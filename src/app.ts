import express from "express";
import cors from "cors";
import connectDB from "./config/database";
import feedRoutes from "./routes/feed.routes";
import scraperRoutes from "./routes/scraper.routes"; // Importamos las rutas de scraping

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Conectar a la base de datos
connectDB();

// Rutas
app.use("/api/feeds", feedRoutes);
app.use("/api", scraperRoutes); // Agregamos la ruta de scraping

export default app;
