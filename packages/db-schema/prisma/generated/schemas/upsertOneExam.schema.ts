import { z } from 'zod';
import { ExamSelectObjectSchema } from './objects/ExamSelect.schema';
import { ExamIncludeObjectSchema } from './objects/ExamInclude.schema';
import { ExamWhereUniqueInputObjectSchema } from './objects/ExamWhereUniqueInput.schema';
import { ExamCreateInputObjectSchema } from './objects/ExamCreateInput.schema';
import { ExamUncheckedCreateInputObjectSchema } from './objects/ExamUncheckedCreateInput.schema';
import { ExamUpdateInputObjectSchema } from './objects/ExamUpdateInput.schema';
import { ExamUncheckedUpdateInputObjectSchema } from './objects/ExamUncheckedUpdateInput.schema';

export const ExamUpsertSchema = z.object({
  select: ExamSelectObjectSchema.optional(),
  include: ExamIncludeObjectSchema.optional(),
  where: ExamWhereUniqueInputObjectSchema,
  create: z.union([
    ExamCreateInputObjectSchema,
    ExamUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    ExamUpdateInputObjectSchema,
    ExamUncheckedUpdateInputObjectSchema,
  ]),
});
