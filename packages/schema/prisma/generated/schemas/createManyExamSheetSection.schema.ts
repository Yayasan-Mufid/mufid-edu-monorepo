import { z } from 'zod';
import { ExamSheetSectionCreateManyInputObjectSchema } from './objects/ExamSheetSectionCreateManyInput.schema';

export const ExamSheetSectionCreateManySchema = z.object({
  data: z.union([
    ExamSheetSectionCreateManyInputObjectSchema,
    z.array(ExamSheetSectionCreateManyInputObjectSchema),
  ]),
});
