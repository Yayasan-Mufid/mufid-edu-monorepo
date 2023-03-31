import { z } from 'zod';
import { StudyGroupCreateNestedOneWithoutAdminsInputObjectSchema } from './StudyGroupCreateNestedOneWithoutAdminsInput.schema';
import { UserCreateNestedOneWithoutManaged_groupsInputObjectSchema } from './UserCreateNestedOneWithoutManaged_groupsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupAdminCreateInput> = z
  .object({
    study_group: z.lazy(
      () => StudyGroupCreateNestedOneWithoutAdminsInputObjectSchema,
    ),
    user: z.lazy(
      () => UserCreateNestedOneWithoutManaged_groupsInputObjectSchema,
    ),
  })
  .strict();

export const StudyGroupAdminCreateInputObjectSchema = Schema;
