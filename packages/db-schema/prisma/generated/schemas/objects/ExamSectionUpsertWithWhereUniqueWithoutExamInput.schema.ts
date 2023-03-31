import { z } from 'zod';
import { ExamSectionWhereUniqueInputObjectSchema } from './ExamSectionWhereUniqueInput.schema';
import { ExamSectionUpdateWithoutExamInputObjectSchema } from './ExamSectionUpdateWithoutExamInput.schema';
import { ExamSectionUncheckedUpdateWithoutExamInputObjectSchema } from './ExamSectionUncheckedUpdateWithoutExamInput.schema';
import { ExamSectionCreateWithoutExamInputObjectSchema } from './ExamSectionCreateWithoutExamInput.schema';
import { ExamSectionUncheckedCreateWithoutExamInputObjectSchema } from './ExamSectionUncheckedCreateWithoutExamInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSectionUpsertWithWhereUniqueWithoutExamInput> =
  z
    .object({
      where: z.lazy(() => ExamSectionWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => ExamSectionUpdateWithoutExamInputObjectSchema),
        z.lazy(() => ExamSectionUncheckedUpdateWithoutExamInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => ExamSectionCreateWithoutExamInputObjectSchema),
        z.lazy(() => ExamSectionUncheckedCreateWithoutExamInputObjectSchema),
      ]),
    })
    .strict();

export const ExamSectionUpsertWithWhereUniqueWithoutExamInputObjectSchema =
  Schema;
