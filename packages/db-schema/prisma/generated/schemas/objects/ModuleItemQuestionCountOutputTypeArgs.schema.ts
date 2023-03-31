import { z } from 'zod';
import { ModuleItemQuestionCountOutputTypeSelectObjectSchema } from './ModuleItemQuestionCountOutputTypeSelect.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemQuestionCountOutputTypeArgs> = z
  .object({
    select: z
      .lazy(() => ModuleItemQuestionCountOutputTypeSelectObjectSchema)
      .optional(),
  })
  .strict();

export const ModuleItemQuestionCountOutputTypeArgsObjectSchema = Schema;
