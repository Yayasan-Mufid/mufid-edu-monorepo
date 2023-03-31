import { z } from 'zod';
import { QuestionCreateWithoutExam_sectionsInputObjectSchema } from './QuestionCreateWithoutExam_sectionsInput.schema';
import { QuestionUncheckedCreateWithoutExam_sectionsInputObjectSchema } from './QuestionUncheckedCreateWithoutExam_sectionsInput.schema';
import { QuestionCreateOrConnectWithoutExam_sectionsInputObjectSchema } from './QuestionCreateOrConnectWithoutExam_sectionsInput.schema';
import { QuestionUpsertWithoutExam_sectionsInputObjectSchema } from './QuestionUpsertWithoutExam_sectionsInput.schema';
import { QuestionWhereUniqueInputObjectSchema } from './QuestionWhereUniqueInput.schema';
import { QuestionUpdateWithoutExam_sectionsInputObjectSchema } from './QuestionUpdateWithoutExam_sectionsInput.schema';
import { QuestionUncheckedUpdateWithoutExam_sectionsInputObjectSchema } from './QuestionUncheckedUpdateWithoutExam_sectionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.QuestionUpdateOneRequiredWithoutExam_sectionsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => QuestionCreateWithoutExam_sectionsInputObjectSchema),
          z.lazy(
            () => QuestionUncheckedCreateWithoutExam_sectionsInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () => QuestionCreateOrConnectWithoutExam_sectionsInputObjectSchema,
        )
        .optional(),
      upsert: z
        .lazy(() => QuestionUpsertWithoutExam_sectionsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => QuestionWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => QuestionUpdateWithoutExam_sectionsInputObjectSchema),
          z.lazy(
            () => QuestionUncheckedUpdateWithoutExam_sectionsInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const QuestionUpdateOneRequiredWithoutExam_sectionsNestedInputObjectSchema =
  Schema;
