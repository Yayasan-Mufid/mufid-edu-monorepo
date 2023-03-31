import { z } from 'zod';
import { StudyGroupCreateNestedOneWithoutAdminsInputObjectSchema } from './StudyGroupCreateNestedOneWithoutAdminsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupAdminCreateWithoutUserInput> = z
  .object({
    study_group: z.lazy(
      () => StudyGroupCreateNestedOneWithoutAdminsInputObjectSchema,
    ),
  })
  .strict();

export const StudyGroupAdminCreateWithoutUserInputObjectSchema = Schema;
