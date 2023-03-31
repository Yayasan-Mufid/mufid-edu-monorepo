import { z } from 'zod';
import { UserUpdateOneRequiredWithoutEnrolled_groupsNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutEnrolled_groupsNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupStudentUpdateWithoutStudy_groupInput> =
  z
    .object({
      user: z
        .lazy(
          () =>
            UserUpdateOneRequiredWithoutEnrolled_groupsNestedInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const StudyGroupStudentUpdateWithoutStudy_groupInputObjectSchema =
  Schema;
