import { z } from 'zod';
import { ExamSectionQuestionScalarWhereInputObjectSchema } from './ExamSectionQuestionScalarWhereInput.schema';
import { ExamSectionQuestionUpdateManyMutationInputObjectSchema } from './ExamSectionQuestionUpdateManyMutationInput.schema';
import { ExamSectionQuestionUncheckedUpdateManyWithoutExam_sectionsInputObjectSchema } from './ExamSectionQuestionUncheckedUpdateManyWithoutExam_sectionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSectionQuestionUpdateManyWithWhereWithoutQuestionInput> =
  z
    .object({
      where: z.lazy(() => ExamSectionQuestionScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => ExamSectionQuestionUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            ExamSectionQuestionUncheckedUpdateManyWithoutExam_sectionsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ExamSectionQuestionUpdateManyWithWhereWithoutQuestionInputObjectSchema =
  Schema;
