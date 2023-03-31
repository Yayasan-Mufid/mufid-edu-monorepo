import { z } from 'zod';
import { StudyGroupExamWhereUniqueInputObjectSchema } from './StudyGroupExamWhereUniqueInput.schema';
import { StudyGroupExamUpdateWithoutGroupInputObjectSchema } from './StudyGroupExamUpdateWithoutGroupInput.schema';
import { StudyGroupExamUncheckedUpdateWithoutGroupInputObjectSchema } from './StudyGroupExamUncheckedUpdateWithoutGroupInput.schema';
import { StudyGroupExamCreateWithoutGroupInputObjectSchema } from './StudyGroupExamCreateWithoutGroupInput.schema';
import { StudyGroupExamUncheckedCreateWithoutGroupInputObjectSchema } from './StudyGroupExamUncheckedCreateWithoutGroupInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupExamUpsertWithWhereUniqueWithoutGroupInput> =
  z
    .object({
      where: z.lazy(() => StudyGroupExamWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => StudyGroupExamUpdateWithoutGroupInputObjectSchema),
        z.lazy(
          () => StudyGroupExamUncheckedUpdateWithoutGroupInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => StudyGroupExamCreateWithoutGroupInputObjectSchema),
        z.lazy(
          () => StudyGroupExamUncheckedCreateWithoutGroupInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const StudyGroupExamUpsertWithWhereUniqueWithoutGroupInputObjectSchema =
  Schema;
