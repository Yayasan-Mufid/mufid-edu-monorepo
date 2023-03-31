import { z } from 'zod';
import { StudyGroupUpdateOneRequiredWithoutAdminsNestedInputObjectSchema } from './StudyGroupUpdateOneRequiredWithoutAdminsNestedInput.schema';
import { UserUpdateOneRequiredWithoutManaged_groupsNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutManaged_groupsNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupAdminUpdateInput> = z
  .object({
    study_group: z
      .lazy(
        () => StudyGroupUpdateOneRequiredWithoutAdminsNestedInputObjectSchema,
      )
      .optional(),
    user: z
      .lazy(
        () => UserUpdateOneRequiredWithoutManaged_groupsNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const StudyGroupAdminUpdateInputObjectSchema = Schema;
