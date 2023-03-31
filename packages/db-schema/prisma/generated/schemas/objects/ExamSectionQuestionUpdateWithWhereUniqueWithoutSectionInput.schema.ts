import { z } from 'zod';
import { ExamSectionQuestionWhereUniqueInputObjectSchema } from './ExamSectionQuestionWhereUniqueInput.schema';
import { ExamSectionQuestionUpdateWithoutSectionInputObjectSchema } from './ExamSectionQuestionUpdateWithoutSectionInput.schema';
import { ExamSectionQuestionUncheckedUpdateWithoutSectionInputObjectSchema } from './ExamSectionQuestionUncheckedUpdateWithoutSectionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSectionQuestionUpdateWithWhereUniqueWithoutSectionInput> =
  z
    .object({
      where: z.lazy(() => ExamSectionQuestionWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => ExamSectionQuestionUpdateWithoutSectionInputObjectSchema),
        z.lazy(
          () =>
            ExamSectionQuestionUncheckedUpdateWithoutSectionInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ExamSectionQuestionUpdateWithWhereUniqueWithoutSectionInputObjectSchema =
  Schema;
