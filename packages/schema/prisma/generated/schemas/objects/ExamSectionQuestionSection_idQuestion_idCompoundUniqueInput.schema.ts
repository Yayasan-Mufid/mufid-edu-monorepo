import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSectionQuestionSection_idQuestion_idCompoundUniqueInput> =
  z
    .object({
      section_id: z.string(),
      question_id: z.string(),
    })
    .strict();

export const ExamSectionQuestionSection_idQuestion_idCompoundUniqueInputObjectSchema =
  Schema;
