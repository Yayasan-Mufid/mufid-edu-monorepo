import { z } from 'zod';
import { ExamSheetWhereInputObjectSchema } from './objects/ExamSheetWhereInput.schema';

export const ExamSheetDeleteManySchema = z.object({
  where: ExamSheetWhereInputObjectSchema.optional(),
});
