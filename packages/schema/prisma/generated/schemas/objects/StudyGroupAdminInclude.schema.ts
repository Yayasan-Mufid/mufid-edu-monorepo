import { z } from 'zod';
import { StudyGroupArgsObjectSchema } from './StudyGroupArgs.schema';
import { UserArgsObjectSchema } from './UserArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupAdminInclude> = z
  .object({
    study_group: z
      .union([z.boolean(), z.lazy(() => StudyGroupArgsObjectSchema)])
      .optional(),
    user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  })
  .strict();

export const StudyGroupAdminIncludeObjectSchema = Schema;
