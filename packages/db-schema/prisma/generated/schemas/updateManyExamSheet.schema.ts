import { z } from 'zod';
import { ExamSheetUpdateManyMutationInputObjectSchema } from './objects/ExamSheetUpdateManyMutationInput.schema';
import { ExamSheetWhereInputObjectSchema } from './objects/ExamSheetWhereInput.schema';

export const ExamSheetUpdateManySchema = z.object({
  data: ExamSheetUpdateManyMutationInputObjectSchema,
  where: ExamSheetWhereInputObjectSchema.optional(),
});
