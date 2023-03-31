import { z } from 'zod';
import { StudyGroupAdminStudy_group_idUser_idCompoundUniqueInputObjectSchema } from './StudyGroupAdminStudy_group_idUser_idCompoundUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupAdminWhereUniqueInput> = z
  .object({
    study_group_id_user_id: z
      .lazy(
        () =>
          StudyGroupAdminStudy_group_idUser_idCompoundUniqueInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const StudyGroupAdminWhereUniqueInputObjectSchema = Schema;
