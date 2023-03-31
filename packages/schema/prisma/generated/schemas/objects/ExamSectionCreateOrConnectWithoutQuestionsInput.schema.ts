import { z } from 'zod';
import { ExamSectionWhereUniqueInputObjectSchema } from './ExamSectionWhereUniqueInput.schema';
import { ExamSectionCreateWithoutQuestionsInputObjectSchema } from './ExamSectionCreateWithoutQuestionsInput.schema';
import { ExamSectionUncheckedCreateWithoutQuestionsInputObjectSchema } from './ExamSectionUncheckedCreateWithoutQuestionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSectionCreateOrConnectWithoutQuestionsInput> =
  z
    .object({
      where: z.lazy(() => ExamSectionWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => ExamSectionCreateWithoutQuestionsInputObjectSchema),
        z.lazy(
          () => ExamSectionUncheckedCreateWithoutQuestionsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ExamSectionCreateOrConnectWithoutQuestionsInputObjectSchema =
  Schema;
