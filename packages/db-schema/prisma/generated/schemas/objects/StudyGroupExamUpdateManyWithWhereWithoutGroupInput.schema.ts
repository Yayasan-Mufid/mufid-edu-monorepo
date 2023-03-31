import { z } from 'zod';
import { StudyGroupExamScalarWhereInputObjectSchema } from './StudyGroupExamScalarWhereInput.schema';
import { StudyGroupExamUpdateManyMutationInputObjectSchema } from './StudyGroupExamUpdateManyMutationInput.schema';
import { StudyGroupExamUncheckedUpdateManyWithoutExamsInputObjectSchema } from './StudyGroupExamUncheckedUpdateManyWithoutExamsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupExamUpdateManyWithWhereWithoutGroupInput> =
  z
    .object({
      where: z.lazy(() => StudyGroupExamScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => StudyGroupExamUpdateManyMutationInputObjectSchema),
        z.lazy(
          () => StudyGroupExamUncheckedUpdateManyWithoutExamsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const StudyGroupExamUpdateManyWithWhereWithoutGroupInputObjectSchema =
  Schema;
