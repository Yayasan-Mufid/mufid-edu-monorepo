import { z } from 'zod';
import { StudyGroupStudentStudy_group_idUser_idCompoundUniqueInputObjectSchema } from './StudyGroupStudentStudy_group_idUser_idCompoundUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupStudentWhereUniqueInput> = z
  .object({
    study_group_id_user_id: z
      .lazy(
        () =>
          StudyGroupStudentStudy_group_idUser_idCompoundUniqueInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const StudyGroupStudentWhereUniqueInputObjectSchema = Schema;
