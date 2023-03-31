import { z } from 'zod';
import { ExamSectionQuestionScalarWhereInputObjectSchema } from './ExamSectionQuestionScalarWhereInput.schema';
import { ExamSectionQuestionUpdateManyMutationInputObjectSchema } from './ExamSectionQuestionUpdateManyMutationInput.schema';
import { ExamSectionQuestionUncheckedUpdateManyWithoutQuestionsInputObjectSchema } from './ExamSectionQuestionUncheckedUpdateManyWithoutQuestionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSectionQuestionUpdateManyWithWhereWithoutSectionInput> =
  z
    .object({
      where: z.lazy(() => ExamSectionQuestionScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => ExamSectionQuestionUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            ExamSectionQuestionUncheckedUpdateManyWithoutQuestionsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ExamSectionQuestionUpdateManyWithWhereWithoutSectionInputObjectSchema =
  Schema;
