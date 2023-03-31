import { z } from 'zod';
import { StudyGroupExamWhereUniqueInputObjectSchema } from './StudyGroupExamWhereUniqueInput.schema';
import { StudyGroupExamUpdateWithoutExamInputObjectSchema } from './StudyGroupExamUpdateWithoutExamInput.schema';
import { StudyGroupExamUncheckedUpdateWithoutExamInputObjectSchema } from './StudyGroupExamUncheckedUpdateWithoutExamInput.schema';
import { StudyGroupExamCreateWithoutExamInputObjectSchema } from './StudyGroupExamCreateWithoutExamInput.schema';
import { StudyGroupExamUncheckedCreateWithoutExamInputObjectSchema } from './StudyGroupExamUncheckedCreateWithoutExamInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupExamUpsertWithWhereUniqueWithoutExamInput> =
  z
    .object({
      where: z.lazy(() => StudyGroupExamWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => StudyGroupExamUpdateWithoutExamInputObjectSchema),
        z.lazy(() => StudyGroupExamUncheckedUpdateWithoutExamInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => StudyGroupExamCreateWithoutExamInputObjectSchema),
        z.lazy(() => StudyGroupExamUncheckedCreateWithoutExamInputObjectSchema),
      ]),
    })
    .strict();

export const StudyGroupExamUpsertWithWhereUniqueWithoutExamInputObjectSchema =
  Schema;
