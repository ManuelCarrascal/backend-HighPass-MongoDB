import { Router } from "express";
import { getArtistas } from "../controllers/artists.controller.js";

const router = Router();

router.get("/artistas", getArtistas);

export default router;
