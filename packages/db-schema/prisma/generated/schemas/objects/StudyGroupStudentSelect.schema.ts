import { z } from 'zod';
import { StudyGroupArgsObjectSchema } from './StudyGroupArgs.schema';
import { UserArgsObjectSchema } from './UserArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupStudentSelect> = z
  .object({
    study_group_id: z.boolean().optional(),
    study_group: z
      .union([z.boolean(), z.lazy(() => StudyGroupArgsObjectSchema)])
      .optional(),
    user_id: z.boolean().optional(),
    user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  })
  .strict();

export const StudyGroupStudentSelectObjectSchema = Schema;
