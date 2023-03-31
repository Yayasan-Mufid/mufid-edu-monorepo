import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupApplicantStudy_group_idUser_idCompoundUniqueInput> =
  z
    .object({
      study_group_id: z.string(),
      user_id: z.string(),
    })
    .strict();

export const StudyGroupApplicantStudy_group_idUser_idCompoundUniqueInputObjectSchema =
  Schema;
