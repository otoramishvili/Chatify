import { Resend } from "resend";
import { config } from "dotenv";

config();

export const resend = new Resend(process.env.RESEND_API_KEY);
