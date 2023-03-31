import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemQuestionStatusUncheckedCreateWithoutQuestionInput> =
  z
    .object({
      user_id: z.string(),
      status: z.string(),
    })
    .strict();

export const ModuleItemQuestionStatusUncheckedCreateWithoutQuestionInputObjectSchema =
  Schema;
