import { z } from 'zod';
import { ExamSheetItemWhereInputObjectSchema } from './objects/ExamSheetItemWhereInput.schema';

export const ExamSheetItemDeleteManySchema = z.object({
  where: ExamSheetItemWhereInputObjectSchema.optional(),
});
