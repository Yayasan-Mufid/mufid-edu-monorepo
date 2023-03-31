import { z } from 'zod';
import { ExamSectionQuestionWhereUniqueInputObjectSchema } from './ExamSectionQuestionWhereUniqueInput.schema';
import { ExamSectionQuestionCreateWithoutSectionInputObjectSchema } from './ExamSectionQuestionCreateWithoutSectionInput.schema';
import { ExamSectionQuestionUncheckedCreateWithoutSectionInputObjectSchema } from './ExamSectionQuestionUncheckedCreateWithoutSectionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSectionQuestionCreateOrConnectWithoutSectionInput> =
  z
    .object({
      where: z.lazy(() => ExamSectionQuestionWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => ExamSectionQuestionCreateWithoutSectionInputObjectSchema),
        z.lazy(
          () =>
            ExamSectionQuestionUncheckedCreateWithoutSectionInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ExamSectionQuestionCreateOrConnectWithoutSectionInputObjectSchema =
  Schema;
