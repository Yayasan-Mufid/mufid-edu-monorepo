import { z } from 'zod';
import { ExamSelectObjectSchema } from './objects/ExamSelect.schema';
import { ExamIncludeObjectSchema } from './objects/ExamInclude.schema';
import { ExamWhereUniqueInputObjectSchema } from './objects/ExamWhereUniqueInput.schema';

export const ExamFindUniqueSchema = z.object({
  select: ExamSelectObjectSchema.optional(),
  include: ExamIncludeObjectSchema.optional(),
  where: ExamWhereUniqueInputObjectSchema,
});
