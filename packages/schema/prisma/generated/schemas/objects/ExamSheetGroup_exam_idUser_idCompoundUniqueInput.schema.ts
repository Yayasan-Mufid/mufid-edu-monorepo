import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSheetGroup_exam_idUser_idCompoundUniqueInput> =
  z
    .object({
      group_exam_id: z.string(),
      user_id: z.string(),
    })
    .strict();

export const ExamSheetGroup_exam_idUser_idCompoundUniqueInputObjectSchema =
  Schema;
