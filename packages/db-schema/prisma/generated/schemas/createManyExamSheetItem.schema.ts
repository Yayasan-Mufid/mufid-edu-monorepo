import { z } from 'zod';
import { ExamSheetItemCreateManyInputObjectSchema } from './objects/ExamSheetItemCreateManyInput.schema';

export const ExamSheetItemCreateManySchema = z.object({
  data: z.union([
    ExamSheetItemCreateManyInputObjectSchema,
    z.array(ExamSheetItemCreateManyInputObjectSchema),
  ]),
});
