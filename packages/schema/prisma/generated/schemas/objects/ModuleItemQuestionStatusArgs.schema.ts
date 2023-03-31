import { z } from 'zod';
import { ModuleItemQuestionStatusSelectObjectSchema } from './ModuleItemQuestionStatusSelect.schema';
import { ModuleItemQuestionStatusIncludeObjectSchema } from './ModuleItemQuestionStatusInclude.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemQuestionStatusArgs> = z
  .object({
    select: z.lazy(() => ModuleItemQuestionStatusSelectObjectSchema).optional(),
    include: z
      .lazy(() => ModuleItemQuestionStatusIncludeObjectSchema)
      .optional(),
  })
  .strict();

export const ModuleItemQuestionStatusArgsObjectSchema = Schema;
