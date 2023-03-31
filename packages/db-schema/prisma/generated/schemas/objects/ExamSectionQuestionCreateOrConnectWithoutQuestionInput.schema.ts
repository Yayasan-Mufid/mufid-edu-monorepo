import { z } from 'zod';
import { ExamSectionQuestionWhereUniqueInputObjectSchema } from './ExamSectionQuestionWhereUniqueInput.schema';
import { ExamSectionQuestionCreateWithoutQuestionInputObjectSchema } from './ExamSectionQuestionCreateWithoutQuestionInput.schema';
import { ExamSectionQuestionUncheckedCreateWithoutQuestionInputObjectSchema } from './ExamSectionQuestionUncheckedCreateWithoutQuestionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSectionQuestionCreateOrConnectWithoutQuestionInput> =
  z
    .object({
      where: z.lazy(() => ExamSectionQuestionWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => ExamSectionQuestionCreateWithoutQuestionInputObjectSchema),
        z.lazy(
          () =>
            ExamSectionQuestionUncheckedCreateWithoutQuestionInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ExamSectionQuestionCreateOrConnectWithoutQuestionInputObjectSchema =
  Schema;
