import { z } from 'zod';
import { ExamSectionSelectObjectSchema } from './objects/ExamSectionSelect.schema';
import { ExamSectionIncludeObjectSchema } from './objects/ExamSectionInclude.schema';
import { ExamSectionWhereUniqueInputObjectSchema } from './objects/ExamSectionWhereUniqueInput.schema';
import { ExamSectionCreateInputObjectSchema } from './objects/ExamSectionCreateInput.schema';
import { ExamSectionUncheckedCreateInputObjectSchema } from './objects/ExamSectionUncheckedCreateInput.schema';
import { ExamSectionUpdateInputObjectSchema } from './objects/ExamSectionUpdateInput.schema';
import { ExamSectionUncheckedUpdateInputObjectSchema } from './objects/ExamSectionUncheckedUpdateInput.schema';

export const ExamSectionUpsertSchema = z.object({
  select: ExamSectionSelectObjectSchema.optional(),
  include: ExamSectionIncludeObjectSchema.optional(),
  where: ExamSectionWhereUniqueInputObjectSchema,
  create: z.union([
    ExamSectionCreateInputObjectSchema,
    ExamSectionUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    ExamSectionUpdateInputObjectSchema,
    ExamSectionUncheckedUpdateInputObjectSchema,
  ]),
});
