import type { NextFunction, Request, Response } from "express";
export declare const rateLimitMiddleware: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
//# sourceMappingURL=rate.limit.middleware.d.ts.map