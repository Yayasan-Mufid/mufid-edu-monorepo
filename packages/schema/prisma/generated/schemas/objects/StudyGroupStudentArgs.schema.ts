import { z } from 'zod';
import { StudyGroupStudentSelectObjectSchema } from './StudyGroupStudentSelect.schema';
import { StudyGroupStudentIncludeObjectSchema } from './StudyGroupStudentInclude.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupStudentArgs> = z
  .object({
    select: z.lazy(() => StudyGroupStudentSelectObjectSchema).optional(),
    include: z.lazy(() => StudyGroupStudentIncludeObjectSchema).optional(),
  })
  .strict();

export const StudyGroupStudentArgsObjectSchema = Schema;
