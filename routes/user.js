import  express from "express";
import {User} from '../models/user.js'
import { getAllUsers, getUserId, login, logout, register } from "../controllers/user.js";
import { isAuth } from "../middleware/auth.js";

const router = express.Router()

router.get("/all", getAllUsers)

router.post("/new", register)
router.post("/login", login)
router.get("/logout", logout)

router.get("/me", isAuth, getUserId)


export default router