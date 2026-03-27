import { ratelimit } from "../lib/rate.limiter.js";

export const rateLimitMiddleware = async (req, res, next) => {
  try {
    const ip = req.ip ?? "127.0.0.1";

    const { success, limit, reset, remaining } = await ratelimit.limit(ip);

    res.setHeader("X-RateLimit-Limit", limit);
    res.setHeader("X-RateLimit-Remaining", remaining);
    res.setHeader("X-RateLimit-Reset", reset);

    if (!success) {
      return res.status(429).json({
        message: "Too many requests",
      });
    }

    next();
  } catch (err) {
    console.error("Rate limit error:", err);
    next(); 
  }
};