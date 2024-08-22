
import express from "express";

import isAuthenticated from "../middlewares/isAuthenticated.js";
import { getCompany, getcompanybyId, registerCompany, updateCompany } from "../controllers/company.controller.js";

 
const router = express.Router();

router.route("/register").post(isAuthenticated,registerCompany);
router.route("/get").get(isAuthenticated,getCompany);
router.route("/get/:id").get(isAuthenticated,getcompanybyId);
router.route("/update/:id").put(isAuthenticated,updateCompany);

export default router;
