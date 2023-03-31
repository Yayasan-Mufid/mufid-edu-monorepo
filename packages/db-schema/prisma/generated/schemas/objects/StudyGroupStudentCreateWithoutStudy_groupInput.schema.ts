import { z } from 'zod';
import { UserCreateNestedOneWithoutEnrolled_groupsInputObjectSchema } from './UserCreateNestedOneWithoutEnrolled_groupsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupStudentCreateWithoutStudy_groupInput> =
  z
    .object({
      user: z.lazy(
        () => UserCreateNestedOneWithoutEnrolled_groupsInputObjectSchema,
      ),
    })
    .strict();

export const StudyGroupStudentCreateWithoutStudy_groupInputObjectSchema =
  Schema;
