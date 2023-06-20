import { Router } from "express";
import {
  getCountArtist,
  getCountProject,
} from "../controllers/home.controller.js";

const router = Router();

router.get("/countartistas", getCountArtist);
router.get("/countproyectos", getCountProject);

export default router;
