import { z } from 'zod';
import { StudyGroupStudentScalarWhereInputObjectSchema } from './StudyGroupStudentScalarWhereInput.schema';
import { StudyGroupStudentUpdateManyMutationInputObjectSchema } from './StudyGroupStudentUpdateManyMutationInput.schema';
import { StudyGroupStudentUncheckedUpdateManyWithoutEnrolled_groupsInputObjectSchema } from './StudyGroupStudentUncheckedUpdateManyWithoutEnrolled_groupsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupStudentUpdateManyWithWhereWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => StudyGroupStudentScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => StudyGroupStudentUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            StudyGroupStudentUncheckedUpdateManyWithoutEnrolled_groupsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const StudyGroupStudentUpdateManyWithWhereWithoutUserInputObjectSchema =
  Schema;
