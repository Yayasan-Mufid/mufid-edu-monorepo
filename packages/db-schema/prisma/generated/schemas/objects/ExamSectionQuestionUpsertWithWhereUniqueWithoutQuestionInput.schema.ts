import { z } from 'zod';
import { ExamSectionQuestionWhereUniqueInputObjectSchema } from './ExamSectionQuestionWhereUniqueInput.schema';
import { ExamSectionQuestionUpdateWithoutQuestionInputObjectSchema } from './ExamSectionQuestionUpdateWithoutQuestionInput.schema';
import { ExamSectionQuestionUncheckedUpdateWithoutQuestionInputObjectSchema } from './ExamSectionQuestionUncheckedUpdateWithoutQuestionInput.schema';
import { ExamSectionQuestionCreateWithoutQuestionInputObjectSchema } from './ExamSectionQuestionCreateWithoutQuestionInput.schema';
import { ExamSectionQuestionUncheckedCreateWithoutQuestionInputObjectSchema } from './ExamSectionQuestionUncheckedCreateWithoutQuestionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSectionQuestionUpsertWithWhereUniqueWithoutQuestionInput> =
  z
    .object({
      where: z.lazy(() => ExamSectionQuestionWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => ExamSectionQuestionUpdateWithoutQuestionInputObjectSchema),
        z.lazy(
          () =>
            ExamSectionQuestionUncheckedUpdateWithoutQuestionInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => ExamSectionQuestionCreateWithoutQuestionInputObjectSchema),
        z.lazy(
          () =>
            ExamSectionQuestionUncheckedCreateWithoutQuestionInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ExamSectionQuestionUpsertWithWhereUniqueWithoutQuestionInputObjectSchema =
  Schema;
