import express from "express";
import { 
    checkAuth, 
    login, 
    logout, 
    signup, 
    updateProfile
} from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";
import { rateLimitMiddleware } from "../middleware/rate.limit.middleware.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

router.put("/update-profile", protectRoute, rateLimitMiddleware, updateProfile);

router.get("/check", protectRoute, rateLimitMiddleware, checkAuth);

export default router;
