import { z } from 'zod';
import { ExamSheetCreateManyInputObjectSchema } from './objects/ExamSheetCreateManyInput.schema';

export const ExamSheetCreateManySchema = z.object({
  data: z.union([
    ExamSheetCreateManyInputObjectSchema,
    z.array(ExamSheetCreateManyInputObjectSchema),
  ]),
});
