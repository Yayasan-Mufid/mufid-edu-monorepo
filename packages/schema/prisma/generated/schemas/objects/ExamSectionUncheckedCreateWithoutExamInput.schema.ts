import { z } from 'zod';
import { ExamSectionQuestionUncheckedCreateNestedManyWithoutSectionInputObjectSchema } from './ExamSectionQuestionUncheckedCreateNestedManyWithoutSectionInput.schema';
import { ExamSheetSectionUncheckedCreateNestedManyWithoutSectionInputObjectSchema } from './ExamSheetSectionUncheckedCreateNestedManyWithoutSectionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSectionUncheckedCreateWithoutExamInput> = z
  .object({
    id: z.string().optional(),
    title: z.string(),
    text: z.string(),
    randomize_questions: z.boolean().optional(),
    nb_of_questions: z.number(),
    seq: z.number(),
    default_point: z.number(),
    weight: z.number().optional(),
    questions: z
      .lazy(
        () =>
          ExamSectionQuestionUncheckedCreateNestedManyWithoutSectionInputObjectSchema,
      )
      .optional(),
    sheet_sections: z
      .lazy(
        () =>
          ExamSheetSectionUncheckedCreateNestedManyWithoutSectionInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const ExamSectionUncheckedCreateWithoutExamInputObjectSchema = Schema;
