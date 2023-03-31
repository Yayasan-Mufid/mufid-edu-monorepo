import { z } from 'zod';
import { StudyGroupStudentScalarWhereInputObjectSchema } from './StudyGroupStudentScalarWhereInput.schema';
import { StudyGroupStudentUpdateManyMutationInputObjectSchema } from './StudyGroupStudentUpdateManyMutationInput.schema';
import { StudyGroupStudentUncheckedUpdateManyWithoutStudentsInputObjectSchema } from './StudyGroupStudentUncheckedUpdateManyWithoutStudentsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupStudentUpdateManyWithWhereWithoutStudy_groupInput> =
  z
    .object({
      where: z.lazy(() => StudyGroupStudentScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => StudyGroupStudentUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            StudyGroupStudentUncheckedUpdateManyWithoutStudentsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const StudyGroupStudentUpdateManyWithWhereWithoutStudy_groupInputObjectSchema =
  Schema;
