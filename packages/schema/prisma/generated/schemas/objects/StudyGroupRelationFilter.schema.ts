import { z } from 'zod';
import { StudyGroupWhereInputObjectSchema } from './StudyGroupWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupRelationFilter> = z
  .object({
    is: z.lazy(() => StudyGroupWhereInputObjectSchema).optional(),
    isNot: z.lazy(() => StudyGroupWhereInputObjectSchema).optional(),
  })
  .strict();

export const StudyGroupRelationFilterObjectSchema = Schema;
