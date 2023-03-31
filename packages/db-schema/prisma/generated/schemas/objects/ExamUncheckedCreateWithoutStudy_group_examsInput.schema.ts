import { z } from 'zod';
import { ExamSectionUncheckedCreateNestedManyWithoutExamInputObjectSchema } from './ExamSectionUncheckedCreateNestedManyWithoutExamInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamUncheckedCreateWithoutStudy_group_examsInput> =
  z
    .object({
      id: z.string().optional(),
      title: z.string(),
      code: z.string(),
      module_id: z.string(),
      rules: z.string(),
      sections: z
        .lazy(
          () =>
            ExamSectionUncheckedCreateNestedManyWithoutExamInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const ExamUncheckedCreateWithoutStudy_group_examsInputObjectSchema =
  Schema;
