import { z } from 'zod';
import { ExamSheetGroup_exam_idUser_idCompoundUniqueInputObjectSchema } from './ExamSheetGroup_exam_idUser_idCompoundUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSheetWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
    group_exam_id_user_id: z
      .lazy(() => ExamSheetGroup_exam_idUser_idCompoundUniqueInputObjectSchema)
      .optional(),
  })
  .strict();

export const ExamSheetWhereUniqueInputObjectSchema = Schema;
