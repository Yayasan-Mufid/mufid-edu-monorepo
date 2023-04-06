import { z } from "zod";
import { toZod } from "tozod";
import { User } from "@prisma/client";

export type MinimalUser = Omit<
  User,
  "password" | "otp" | "otp_expired" | "image"
>;

export const userSchema: toZod<MinimalUser> = z.object({
  id: z.string(),
  name: z.string().nullable(),
  address: z.string().nullable(),
  gender: z.string().nullable(),
  phone_number: z.string().nullable(),
  wa_number: z.string().nullable(),
  date_of_birth: z.date().nullable(),
  place_of_birth: z.string().nullable(),
  email: z.string().nullable(),
  profile_picture: z.string().url().nullable(),
  emailVerified: z.date().nullable(),
  telegram_id: z.string().nullable(),
  username: z.string().nullable(),
  mandatory_filled: z.boolean(),
  suspended: z.boolean(),
});
