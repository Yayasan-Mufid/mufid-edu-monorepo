import { z } from 'zod';
import { ExamCreateNestedOneWithoutSectionsInputObjectSchema } from './ExamCreateNestedOneWithoutSectionsInput.schema';
import { ExamSectionQuestionCreateNestedManyWithoutSectionInputObjectSchema } from './ExamSectionQuestionCreateNestedManyWithoutSectionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSectionCreateWithoutSheet_sectionsInput> = z
  .object({
    id: z.string().optional(),
    exam: z.lazy(() => ExamCreateNestedOneWithoutSectionsInputObjectSchema),
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
          ExamSectionQuestionCreateNestedManyWithoutSectionInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const ExamSectionCreateWithoutSheet_sectionsInputObjectSchema = Schema;
