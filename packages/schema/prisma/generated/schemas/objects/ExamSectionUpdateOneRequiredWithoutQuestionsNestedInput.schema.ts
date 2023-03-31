import { z } from 'zod';
import { ExamSectionCreateWithoutQuestionsInputObjectSchema } from './ExamSectionCreateWithoutQuestionsInput.schema';
import { ExamSectionUncheckedCreateWithoutQuestionsInputObjectSchema } from './ExamSectionUncheckedCreateWithoutQuestionsInput.schema';
import { ExamSectionCreateOrConnectWithoutQuestionsInputObjectSchema } from './ExamSectionCreateOrConnectWithoutQuestionsInput.schema';
import { ExamSectionUpsertWithoutQuestionsInputObjectSchema } from './ExamSectionUpsertWithoutQuestionsInput.schema';
import { ExamSectionWhereUniqueInputObjectSchema } from './ExamSectionWhereUniqueInput.schema';
import { ExamSectionUpdateWithoutQuestionsInputObjectSchema } from './ExamSectionUpdateWithoutQuestionsInput.schema';
import { ExamSectionUncheckedUpdateWithoutQuestionsInputObjectSchema } from './ExamSectionUncheckedUpdateWithoutQuestionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSectionUpdateOneRequiredWithoutQuestionsNestedInput> =
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
      upsert: z
        .lazy(() => ExamSectionUpsertWithoutQuestionsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => ExamSectionWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => ExamSectionUpdateWithoutQuestionsInputObjectSchema),
          z.lazy(
            () => ExamSectionUncheckedUpdateWithoutQuestionsInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const ExamSectionUpdateOneRequiredWithoutQuestionsNestedInputObjectSchema =
  Schema;
