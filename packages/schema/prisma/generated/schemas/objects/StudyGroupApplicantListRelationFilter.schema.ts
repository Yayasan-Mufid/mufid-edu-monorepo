import { z } from 'zod';
import { StudyGroupApplicantWhereInputObjectSchema } from './StudyGroupApplicantWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupApplicantListRelationFilter> = z
  .object({
    every: z.lazy(() => StudyGroupApplicantWhereInputObjectSchema).optional(),
    some: z.lazy(() => StudyGroupApplicantWhereInputObjectSchema).optional(),
    none: z.lazy(() => StudyGroupApplicantWhereInputObjectSchema).optional(),
  })
  .strict();

export const StudyGroupApplicantListRelationFilterObjectSchema = Schema;
