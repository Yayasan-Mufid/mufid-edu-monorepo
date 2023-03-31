import { z } from 'zod';
import { StudyGroupExamWhereUniqueInputObjectSchema } from './StudyGroupExamWhereUniqueInput.schema';
import { StudyGroupExamUpdateWithoutGroupInputObjectSchema } from './StudyGroupExamUpdateWithoutGroupInput.schema';
import { StudyGroupExamUncheckedUpdateWithoutGroupInputObjectSchema } from './StudyGroupExamUncheckedUpdateWithoutGroupInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupExamUpdateWithWhereUniqueWithoutGroupInput> =
  z
    .object({
      where: z.lazy(() => StudyGroupExamWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => StudyGroupExamUpdateWithoutGroupInputObjectSchema),
        z.lazy(
          () => StudyGroupExamUncheckedUpdateWithoutGroupInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const StudyGroupExamUpdateWithWhereUniqueWithoutGroupInputObjectSchema =
  Schema;
