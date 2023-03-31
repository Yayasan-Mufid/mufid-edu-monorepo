import { z } from 'zod';
import { ModuleItemQuestionSelectObjectSchema } from './ModuleItemQuestionSelect.schema';
import { ModuleItemQuestionIncludeObjectSchema } from './ModuleItemQuestionInclude.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemQuestionArgs> = z
  .object({
    select: z.lazy(() => ModuleItemQuestionSelectObjectSchema).optional(),
    include: z.lazy(() => ModuleItemQuestionIncludeObjectSchema).optional(),
  })
  .strict();

export const ModuleItemQuestionArgsObjectSchema = Schema;
