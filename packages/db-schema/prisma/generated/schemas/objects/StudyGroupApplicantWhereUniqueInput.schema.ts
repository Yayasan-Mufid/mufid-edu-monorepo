import { z } from 'zod';
import { StudyGroupApplicantStudy_group_idUser_idCompoundUniqueInputObjectSchema } from './StudyGroupApplicantStudy_group_idUser_idCompoundUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupApplicantWhereUniqueInput> = z
  .object({
    invoice_id: z.string().optional(),
    study_group_id_user_id: z
      .lazy(
        () =>
          StudyGroupApplicantStudy_group_idUser_idCompoundUniqueInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const StudyGroupApplicantWhereUniqueInputObjectSchema = Schema;
