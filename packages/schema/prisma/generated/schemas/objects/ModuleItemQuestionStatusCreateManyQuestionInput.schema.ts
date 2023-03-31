import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemQuestionStatusCreateManyQuestionInput> =
  z
    .object({
      user_id: z.string(),
      status: z.string(),
    })
    .strict();

export const ModuleItemQuestionStatusCreateManyQuestionInputObjectSchema =
  Schema;
