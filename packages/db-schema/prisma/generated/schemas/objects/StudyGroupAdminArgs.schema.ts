import { z } from 'zod';
import { StudyGroupAdminSelectObjectSchema } from './StudyGroupAdminSelect.schema';
import { StudyGroupAdminIncludeObjectSchema } from './StudyGroupAdminInclude.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupAdminArgs> = z
  .object({
    select: z.lazy(() => StudyGroupAdminSelectObjectSchema).optional(),
    include: z.lazy(() => StudyGroupAdminIncludeObjectSchema).optional(),
  })
  .strict();

export const StudyGroupAdminArgsObjectSchema = Schema;
