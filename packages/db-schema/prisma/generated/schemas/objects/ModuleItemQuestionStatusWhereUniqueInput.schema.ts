import { z } from 'zod';
import { ModuleItemQuestionStatusQuestion_idUser_idCompoundUniqueInputObjectSchema } from './ModuleItemQuestionStatusQuestion_idUser_idCompoundUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemQuestionStatusWhereUniqueInput> = z
  .object({
    question_id_user_id: z
      .lazy(
        () =>
          ModuleItemQuestionStatusQuestion_idUser_idCompoundUniqueInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const ModuleItemQuestionStatusWhereUniqueInputObjectSchema = Schema;
