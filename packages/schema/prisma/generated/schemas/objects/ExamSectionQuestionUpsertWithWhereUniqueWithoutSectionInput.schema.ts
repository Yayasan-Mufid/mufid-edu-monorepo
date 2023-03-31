import { z } from 'zod';
import { ExamSectionQuestionWhereUniqueInputObjectSchema } from './ExamSectionQuestionWhereUniqueInput.schema';
import { ExamSectionQuestionUpdateWithoutSectionInputObjectSchema } from './ExamSectionQuestionUpdateWithoutSectionInput.schema';
import { ExamSectionQuestionUncheckedUpdateWithoutSectionInputObjectSchema } from './ExamSectionQuestionUncheckedUpdateWithoutSectionInput.schema';
import { ExamSectionQuestionCreateWithoutSectionInputObjectSchema } from './ExamSectionQuestionCreateWithoutSectionInput.schema';
import { ExamSectionQuestionUncheckedCreateWithoutSectionInputObjectSchema } from './ExamSectionQuestionUncheckedCreateWithoutSectionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSectionQuestionUpsertWithWhereUniqueWithoutSectionInput> =
  z
    .object({
      where: z.lazy(() => ExamSectionQuestionWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => ExamSectionQuestionUpdateWithoutSectionInputObjectSchema),
        z.lazy(
          () =>
            ExamSectionQuestionUncheckedUpdateWithoutSectionInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => ExamSectionQuestionCreateWithoutSectionInputObjectSchema),
        z.lazy(
          () =>
            ExamSectionQuestionUncheckedCreateWithoutSectionInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ExamSectionQuestionUpsertWithWhereUniqueWithoutSectionInputObjectSchema =
  Schema;
