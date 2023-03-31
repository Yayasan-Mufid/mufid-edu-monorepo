import { z } from 'zod';
import { ModuleItemQuestionArgsObjectSchema } from './ModuleItemQuestionArgs.schema';
import { UserArgsObjectSchema } from './UserArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemQuestionStatusInclude> = z
  .object({
    question: z
      .union([z.boolean(), z.lazy(() => ModuleItemQuestionArgsObjectSchema)])
      .optional(),
    user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  })
  .strict();

export const ModuleItemQuestionStatusIncludeObjectSchema = Schema;
