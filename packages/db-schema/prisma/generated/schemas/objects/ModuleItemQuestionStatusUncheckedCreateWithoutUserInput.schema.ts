import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemQuestionStatusUncheckedCreateWithoutUserInput> =
  z
    .object({
      question_id: z.string(),
      status: z.string(),
    })
    .strict();

export const ModuleItemQuestionStatusUncheckedCreateWithoutUserInputObjectSchema =
  Schema;
