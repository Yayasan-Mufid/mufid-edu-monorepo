import { z } from 'zod';
import { StudyGroupCreateNestedOneWithoutStudentsInputObjectSchema } from './StudyGroupCreateNestedOneWithoutStudentsInput.schema';
import { UserCreateNestedOneWithoutEnrolled_groupsInputObjectSchema } from './UserCreateNestedOneWithoutEnrolled_groupsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupStudentCreateInput> = z
  .object({
    study_group: z.lazy(
      () => StudyGroupCreateNestedOneWithoutStudentsInputObjectSchema,
    ),
    user: z.lazy(
      () => UserCreateNestedOneWithoutEnrolled_groupsInputObjectSchema,
    ),
  })
  .strict();

export const StudyGroupStudentCreateInputObjectSchema = Schema;
