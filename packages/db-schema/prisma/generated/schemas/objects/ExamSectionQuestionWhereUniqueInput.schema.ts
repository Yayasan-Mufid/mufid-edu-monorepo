import { z } from 'zod';
import { ExamSectionQuestionSection_idQuestion_idCompoundUniqueInputObjectSchema } from './ExamSectionQuestionSection_idQuestion_idCompoundUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSectionQuestionWhereUniqueInput> = z
  .object({
    section_id_question_id: z
      .lazy(
        () =>
          ExamSectionQuestionSection_idQuestion_idCompoundUniqueInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const ExamSectionQuestionWhereUniqueInputObjectSchema = Schema;
