import { z } from 'zod';
import { StudyGroupUpdateOneRequiredWithoutStudentsNestedInputObjectSchema } from './StudyGroupUpdateOneRequiredWithoutStudentsNestedInput.schema';
import { UserUpdateOneRequiredWithoutEnrolled_groupsNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutEnrolled_groupsNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupStudentUpdateInput> = z
  .object({
    study_group: z
      .lazy(
        () => StudyGroupUpdateOneRequiredWithoutStudentsNestedInputObjectSchema,
      )
      .optional(),
    user: z
      .lazy(
        () =>
          UserUpdateOneRequiredWithoutEnrolled_groupsNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const StudyGroupStudentUpdateInputObjectSchema = Schema;
