import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemQuestionStatusQuestion_idUser_idCompoundUniqueInput> =
  z
    .object({
      question_id: z.string(),
      user_id: z.string(),
    })
    .strict();

export const ModuleItemQuestionStatusQuestion_idUser_idCompoundUniqueInputObjectSchema =
  Schema;
