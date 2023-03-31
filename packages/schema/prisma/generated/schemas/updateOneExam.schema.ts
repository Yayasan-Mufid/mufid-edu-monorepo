import { z } from 'zod';
import { ExamSelectObjectSchema } from './objects/ExamSelect.schema';
import { ExamIncludeObjectSchema } from './objects/ExamInclude.schema';
import { ExamUpdateInputObjectSchema } from './objects/ExamUpdateInput.schema';
import { ExamUncheckedUpdateInputObjectSchema } from './objects/ExamUncheckedUpdateInput.schema';
import { ExamWhereUniqueInputObjectSchema } from './objects/ExamWhereUniqueInput.schema';

export const ExamUpdateOneSchema = z.object({
  select: ExamSelectObjectSchema.optional(),
  include: ExamIncludeObjectSchema.optional(),
  data: z.union([
    ExamUpdateInputObjectSchema,
    ExamUncheckedUpdateInputObjectSchema,
  ]),
  where: ExamWhereUniqueInputObjectSchema,
});
