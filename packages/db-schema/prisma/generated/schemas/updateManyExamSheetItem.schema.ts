import { z } from 'zod';
import { ExamSheetItemUpdateManyMutationInputObjectSchema } from './objects/ExamSheetItemUpdateManyMutationInput.schema';
import { ExamSheetItemWhereInputObjectSchema } from './objects/ExamSheetItemWhereInput.schema';

export const ExamSheetItemUpdateManySchema = z.object({
  data: ExamSheetItemUpdateManyMutationInputObjectSchema,
  where: ExamSheetItemWhereInputObjectSchema.optional(),
});
