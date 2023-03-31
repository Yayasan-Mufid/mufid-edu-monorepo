import { z } from 'zod';
import { StudyGroupApplicantWhereInputObjectSchema } from './StudyGroupApplicantWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupApplicantRelationFilter> = z
  .object({
    is: z
      .lazy(() => StudyGroupApplicantWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => StudyGroupApplicantWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const StudyGroupApplicantRelationFilterObjectSchema = Schema;
