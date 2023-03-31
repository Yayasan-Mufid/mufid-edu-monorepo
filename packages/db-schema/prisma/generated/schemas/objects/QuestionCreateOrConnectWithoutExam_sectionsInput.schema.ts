import { z } from 'zod';
import { QuestionWhereUniqueInputObjectSchema } from './QuestionWhereUniqueInput.schema';
import { QuestionCreateWithoutExam_sectionsInputObjectSchema } from './QuestionCreateWithoutExam_sectionsInput.schema';
import { QuestionUncheckedCreateWithoutExam_sectionsInputObjectSchema } from './QuestionUncheckedCreateWithoutExam_sectionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.QuestionCreateOrConnectWithoutExam_sectionsInput> =
  z
    .object({
      where: z.lazy(() => QuestionWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => QuestionCreateWithoutExam_sectionsInputObjectSchema),
        z.lazy(
          () => QuestionUncheckedCreateWithoutExam_sectionsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const QuestionCreateOrConnectWithoutExam_sectionsInputObjectSchema =
  Schema;
