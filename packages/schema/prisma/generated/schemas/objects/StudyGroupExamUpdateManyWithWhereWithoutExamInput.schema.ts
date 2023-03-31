import { z } from 'zod';
import { StudyGroupExamScalarWhereInputObjectSchema } from './StudyGroupExamScalarWhereInput.schema';
import { StudyGroupExamUpdateManyMutationInputObjectSchema } from './StudyGroupExamUpdateManyMutationInput.schema';
import { StudyGroupExamUncheckedUpdateManyWithoutStudy_group_examsInputObjectSchema } from './StudyGroupExamUncheckedUpdateManyWithoutStudy_group_examsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupExamUpdateManyWithWhereWithoutExamInput> =
  z
    .object({
      where: z.lazy(() => StudyGroupExamScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => StudyGroupExamUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            StudyGroupExamUncheckedUpdateManyWithoutStudy_group_examsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const StudyGroupExamUpdateManyWithWhereWithoutExamInputObjectSchema =
  Schema;
