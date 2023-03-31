import { z } from 'zod';
import { ModuleItemQuestionArgsObjectSchema } from './ModuleItemQuestionArgs.schema';
import { UserArgsObjectSchema } from './UserArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemQuestionStatusSelect> = z
  .object({
    question_id: z.boolean().optional(),
    question: z
      .union([z.boolean(), z.lazy(() => ModuleItemQuestionArgsObjectSchema)])
      .optional(),
    user_id: z.boolean().optional(),
    user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
    status: z.boolean().optional(),
  })
  .strict();

export const ModuleItemQuestionStatusSelectObjectSchema = Schema;
