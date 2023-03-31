import { z } from 'zod';
import { StudyGroupStudentWhereInputObjectSchema } from './StudyGroupStudentWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupStudentListRelationFilter> = z
  .object({
    every: z.lazy(() => StudyGroupStudentWhereInputObjectSchema).optional(),
    some: z.lazy(() => StudyGroupStudentWhereInputObjectSchema).optional(),
    none: z.lazy(() => StudyGroupStudentWhereInputObjectSchema).optional(),
  })
  .strict();

export const StudyGroupStudentListRelationFilterObjectSchema = Schema;
