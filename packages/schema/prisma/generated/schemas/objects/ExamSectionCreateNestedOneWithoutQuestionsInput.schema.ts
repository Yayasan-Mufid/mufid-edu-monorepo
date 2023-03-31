import { z } from 'zod';
import { ExamSectionCreateWithoutQuestionsInputObjectSchema } from './ExamSectionCreateWithoutQuestionsInput.schema';
import { ExamSectionUncheckedCreateWithoutQuestionsInputObjectSchema } from './ExamSectionUncheckedCreateWithoutQuestionsInput.schema';
import { ExamSectionCreateOrConnectWithoutQuestionsInputObjectSchema } from './ExamSectionCreateOrConnectWithoutQuestionsInput.schema';
import { ExamSectionWhereUniqueInputObjectSchema } from './ExamSectionWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSectionCreateNestedOneWithoutQuestionsInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ExamSectionCreateWithoutQuestionsInputObjectSchema),
          z.lazy(
            () => ExamSectionUncheckedCreateWithoutQuestionsInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => ExamSectionCreateOrConnectWithoutQuestionsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => ExamSectionWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const ExamSectionCreateNestedOneWithoutQuestionsInputObjectSchema =
  Schema;
