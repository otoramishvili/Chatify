import express from "express";
import { checkAuth, login, logout, signup, updateProfile } from "../controllers/auth.controller.js";
import { authorize, protectRoute } from "../middleware/auth.middleware.js";
import { rateLimitMiddleware } from "../middleware/rate.limit.middleware.js";
const router = express.Router();
router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.put("/update-profile", protectRoute, rateLimitMiddleware, updateProfile);
router.get("/check", protectRoute, rateLimitMiddleware, checkAuth);
router.get("/admin", protectRoute, authorize("admin"));
export default router;
//# sourceMappingURL=auth.route.js.map