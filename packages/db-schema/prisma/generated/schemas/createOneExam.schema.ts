import { z } from 'zod';
import { ExamSelectObjectSchema } from './objects/ExamSelect.schema';
import { ExamIncludeObjectSchema } from './objects/ExamInclude.schema';
import { ExamCreateInputObjectSchema } from './objects/ExamCreateInput.schema';
import { ExamUncheckedCreateInputObjectSchema } from './objects/ExamUncheckedCreateInput.schema';

export const ExamCreateOneSchema = z.object({
  select: ExamSelectObjectSchema.optional(),
  include: ExamIncludeObjectSchema.optional(),
  data: z.union([
    ExamCreateInputObjectSchema,
    ExamUncheckedCreateInputObjectSchema,
  ]),
});
