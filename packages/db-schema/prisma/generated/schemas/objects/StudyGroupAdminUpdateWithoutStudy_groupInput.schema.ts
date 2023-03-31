import { z } from 'zod';
import { UserUpdateOneRequiredWithoutManaged_groupsNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutManaged_groupsNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupAdminUpdateWithoutStudy_groupInput> = z
  .object({
    user: z
      .lazy(
        () => UserUpdateOneRequiredWithoutManaged_groupsNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const StudyGroupAdminUpdateWithoutStudy_groupInputObjectSchema = Schema;
