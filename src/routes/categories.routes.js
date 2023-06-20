import { Router } from "express";
import { getCategories } from "../controllers/categories.controller.js";

const router = Router();

router.get("/categorias", getCategories);

export default router;
