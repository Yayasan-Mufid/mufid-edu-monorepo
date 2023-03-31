import { z } from 'zod';
import { UserCreateNestedOneWithoutManaged_groupsInputObjectSchema } from './UserCreateNestedOneWithoutManaged_groupsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupAdminCreateWithoutStudy_groupInput> = z
  .object({
    user: z.lazy(
      () => UserCreateNestedOneWithoutManaged_groupsInputObjectSchema,
    ),
  })
  .strict();

export const StudyGroupAdminCreateWithoutStudy_groupInputObjectSchema = Schema;
