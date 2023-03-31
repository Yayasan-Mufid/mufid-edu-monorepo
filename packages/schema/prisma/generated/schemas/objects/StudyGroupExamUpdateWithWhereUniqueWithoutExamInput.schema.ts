import { z } from 'zod';
import { StudyGroupExamWhereUniqueInputObjectSchema } from './StudyGroupExamWhereUniqueInput.schema';
import { StudyGroupExamUpdateWithoutExamInputObjectSchema } from './StudyGroupExamUpdateWithoutExamInput.schema';
import { StudyGroupExamUncheckedUpdateWithoutExamInputObjectSchema } from './StudyGroupExamUncheckedUpdateWithoutExamInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupExamUpdateWithWhereUniqueWithoutExamInput> =
  z
    .object({
      where: z.lazy(() => StudyGroupExamWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => StudyGroupExamUpdateWithoutExamInputObjectSchema),
        z.lazy(() => StudyGroupExamUncheckedUpdateWithoutExamInputObjectSchema),
      ]),
    })
    .strict();

export const StudyGroupExamUpdateWithWhereUniqueWithoutExamInputObjectSchema =
  Schema;
