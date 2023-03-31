import { z } from 'zod';
import { ExamSectionQuestionWhereUniqueInputObjectSchema } from './ExamSectionQuestionWhereUniqueInput.schema';
import { ExamSectionQuestionUpdateWithoutQuestionInputObjectSchema } from './ExamSectionQuestionUpdateWithoutQuestionInput.schema';
import { ExamSectionQuestionUncheckedUpdateWithoutQuestionInputObjectSchema } from './ExamSectionQuestionUncheckedUpdateWithoutQuestionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSectionQuestionUpdateWithWhereUniqueWithoutQuestionInput> =
  z
    .object({
      where: z.lazy(() => ExamSectionQuestionWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => ExamSectionQuestionUpdateWithoutQuestionInputObjectSchema),
        z.lazy(
          () =>
            ExamSectionQuestionUncheckedUpdateWithoutQuestionInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ExamSectionQuestionUpdateWithWhereUniqueWithoutQuestionInputObjectSchema =
  Schema;
