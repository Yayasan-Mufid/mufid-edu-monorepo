import { z } from 'zod';
import { ExamSectionWhereUniqueInputObjectSchema } from './ExamSectionWhereUniqueInput.schema';
import { ExamSectionUpdateWithoutExamInputObjectSchema } from './ExamSectionUpdateWithoutExamInput.schema';
import { ExamSectionUncheckedUpdateWithoutExamInputObjectSchema } from './ExamSectionUncheckedUpdateWithoutExamInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSectionUpdateWithWhereUniqueWithoutExamInput> =
  z
    .object({
      where: z.lazy(() => ExamSectionWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => ExamSectionUpdateWithoutExamInputObjectSchema),
        z.lazy(() => ExamSectionUncheckedUpdateWithoutExamInputObjectSchema),
      ]),
    })
    .strict();

export const ExamSectionUpdateWithWhereUniqueWithoutExamInputObjectSchema =
  Schema;
