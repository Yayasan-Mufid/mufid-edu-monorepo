import { z } from 'zod';
import { QuestionCreateWithoutExam_sectionsInputObjectSchema } from './QuestionCreateWithoutExam_sectionsInput.schema';
import { QuestionUncheckedCreateWithoutExam_sectionsInputObjectSchema } from './QuestionUncheckedCreateWithoutExam_sectionsInput.schema';
import { QuestionCreateOrConnectWithoutExam_sectionsInputObjectSchema } from './QuestionCreateOrConnectWithoutExam_sectionsInput.schema';
import { QuestionWhereUniqueInputObjectSchema } from './QuestionWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.QuestionCreateNestedOneWithoutExam_sectionsInput> =
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
      connect: z.lazy(() => QuestionWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const QuestionCreateNestedOneWithoutExam_sectionsInputObjectSchema =
  Schema;
