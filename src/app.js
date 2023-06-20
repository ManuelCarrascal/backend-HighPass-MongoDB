import express from "express";
//import { router } from "./routes/index.js";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";
import homeRoutes from "./routes/home.routes.js";
import locationRoutes from "./routes/location.routes.js";
import artistRoutes from "./routes/artists.routes.js";
import categoriesRoutes from "./routes/categories.routes.js";
import cors from "cors";

const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());
// Middlewares - for parsing application/json
app.use(cors());
app.use("/api", homeRoutes);
app.use("/api", authRoutes);
app.use("/api", locationRoutes);
app.use("/api", artistRoutes);
app.use("/api", categoriesRoutes);
//app.use(express.urlencoded({ extended: false }));

// Routes
//app.use(router);

export default app;
