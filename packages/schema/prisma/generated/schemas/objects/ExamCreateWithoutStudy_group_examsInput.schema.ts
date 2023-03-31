import { z } from 'zod';
import { ModuleCreateNestedOneWithoutExamsInputObjectSchema } from './ModuleCreateNestedOneWithoutExamsInput.schema';
import { ExamSectionCreateNestedManyWithoutExamInputObjectSchema } from './ExamSectionCreateNestedManyWithoutExamInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamCreateWithoutStudy_group_examsInput> = z
  .object({
    id: z.string().optional(),
    title: z.string(),
    code: z.string(),
    module: z.lazy(() => ModuleCreateNestedOneWithoutExamsInputObjectSchema),
    rules: z.string(),
    sections: z
      .lazy(() => ExamSectionCreateNestedManyWithoutExamInputObjectSchema)
      .optional(),
  })
  .strict();

export const ExamCreateWithoutStudy_group_examsInputObjectSchema = Schema;
