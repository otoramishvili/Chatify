import type { Request, Response } from "express";
export declare const getUsersForSidebar: (req: Request, res: Response) => Promise<void>;
export declare const searchUsers: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const getMessages: (req: Request, res: Response) => Promise<void>;
export declare const sendMessage: (req: Request, res: Response) => Promise<void>;
//# sourceMappingURL=message.controller.d.ts.map