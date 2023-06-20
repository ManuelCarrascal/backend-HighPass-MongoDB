import { Router } from "express";
import {
  getCountries,
  fetchDepartmentsByCountryId,
  getAllDepartments,
  getCityById,
  fetchCitiesByDepartmentId,
} from "../controllers/location.controller.js";

const router = Router();

router.get("/paises", getCountries);
router.get("/departamentos", getAllDepartments);
router.get("/departamentos/:id", fetchDepartmentsByCountryId);
router.get("/ciudades", getCityById);
router.get("/ciudades/:id", fetchCitiesByDepartmentId);
export default router;
