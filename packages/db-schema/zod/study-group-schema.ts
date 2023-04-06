import { z } from "zod";
import { toZod } from "tozod";
import { StudyGroup } from "@prisma/client";

export const studyGroupSchema: toZod<StudyGroup> = z.object({
  gender: z.string(), //['MALE', 'FEMALE']
  name: z.string(),
  code: z.string(),
  module_id: z.string(),
  capacity: z.number(),
  enrollment_start: z.date(),
  enrollment_end: z.date(),
  active_start: z.date(),
  active_end: z.date(),
  logo_url: z.string().url(),
  invoice_amount: z.number(),
  invoice_title: z.string(),
  invoice_account_id: z.string(),
  use_schedule: z.boolean().nullable(),
  application_note: z.string().nullable(),
  id: z.string(),
});
