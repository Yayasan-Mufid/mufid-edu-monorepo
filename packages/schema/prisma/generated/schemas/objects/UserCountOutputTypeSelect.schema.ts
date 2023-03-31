import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCountOutputTypeSelect> = z
  .object({
    accounts: z.boolean().optional(),
    sessions: z.boolean().optional(),
    roles: z.boolean().optional(),
    invoices: z.boolean().optional(),
    confirmed_by_me_invoices: z.boolean().optional(),
    managed_programs: z.boolean().optional(),
    managed_modules: z.boolean().optional(),
    accessible_modules: z.boolean().optional(),
    module_item_status: z.boolean().optional(),
    module_item_attachment_status: z.boolean().optional(),
    applied_groups: z.boolean().optional(),
    enrolled_groups: z.boolean().optional(),
    managed_groups: z.boolean().optional(),
    created_questions: z.boolean().optional(),
    validated_questions: z.boolean().optional(),
    exam_sheets: z.boolean().optional(),
    graded_exam_sheets: z.boolean().optional(),
    graded_exam_item: z.boolean().optional(),
    created_announcements: z.boolean().optional(),
    uploaded_files: z.boolean().optional(),
    module_item_question_status: z.boolean().optional(),
  })
  .strict();

export const UserCountOutputTypeSelectObjectSchema = Schema;
