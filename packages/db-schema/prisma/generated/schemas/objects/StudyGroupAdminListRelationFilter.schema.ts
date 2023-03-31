import { z } from 'zod';
import { StudyGroupAdminWhereInputObjectSchema } from './StudyGroupAdminWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupAdminListRelationFilter> = z
  .object({
    every: z.lazy(() => StudyGroupAdminWhereInputObjectSchema).optional(),
    some: z.lazy(() => StudyGroupAdminWhereInputObjectSchema).optional(),
    none: z.lazy(() => StudyGroupAdminWhereInputObjectSchema).optional(),
  })
  .strict();

export const StudyGroupAdminListRelationFilterObjectSchema = Schema;
